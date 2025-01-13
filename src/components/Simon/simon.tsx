import React, { useEffect, useState } from 'react';
import Key from '../Key/key';
import './simon.css';

interface ISimon {
  sequence: number[];
  elementRef: React.RefObject<HTMLDivElement>;
  animationRef: React.RefObject<HTMLImageElement>;
}

const Simon: React.FC<ISimon> = (props) => {
  const [clickNum, setClickNum] = useState<number>(-1);
  const [stage, setStage] = useState<number>(0);
  const [mode, setMode] = useState<number>(0);
  const [StageComponent, setStageComponent] = useState<any>(null);
  const [LayerComponent, setLayerComponent] = useState<any>(null);
  const [RegularPolygonComponent, setRegularPolygonComponent] = useState<any>(null);

  const baseColors: string[] = ["#D72638", "#FF5700", " #FFC107", "#4CAF50", "#1E88E5", "#9C27B0"];
  const lightColors: string[] = ["#FF4D6D", "#FFA333", "#FFE066", "#B9FBC0", "#57C7FF", "#E87BF8"];
  const [nowColors, setNowColors] = useState<string[]>(baseColors);

  // טעינה דינמית של הרכיבים
  useEffect(() => {
    import('react-konva').then((module) => {
      setStageComponent(module.Stage);
      setLayerComponent(module.Layer);
      setRegularPolygonComponent(module.RegularPolygon);
    });
  }, []);

  const successAudio: string = "sound/soundsuccess.mp3";
  const failAudio: string = "sound/soundfail.mp3";
  const keys = [
    { x: 465, y: 100, rotation: 0, fill: nowColors[0], sound: "sound/sound1.mp3" },
    { x: 662, y: 117, rotation: 60, fill: nowColors[1], sound: "sound/sound2.mp3" },
    { x: 758, y: 302, rotation: 120, fill: nowColors[2], sound: "sound/sound3.mp3" },
    { x: 638, y: 464, rotation: 180, fill: nowColors[3], sound: "sound/sound4.mp3" },
    { x: 428, y: 440, rotation: 240, fill: nowColors[4], sound: "sound/sound5.mp3" },
    { x: 350, y: 253, rotation: 300, fill: nowColors[5], sound: "sound/sound6.mp3" },
  ];

  // פונקציה להארת המקש והשמעת צליל
  const LightKey = (index: number) => {
    const audio = new Audio(keys[index].sound);
    audio.play();
    // מעדכן את הצבע הנוכחי
    setNowColors((prevColors) => {
      const temp = [...prevColors];
      temp[index] = lightColors[index];
      return temp;
    });
    // מחזירים את הצבע המקורי אחרי זמן קצר
    setTimeout(() => {
      setNowColors((prevColors) => {
        const resetColors = [...prevColors];
        resetColors[index] = baseColors[index]; // מחזירים לצבע המקורי
        return resetColors;
      });
    }, 600); // אחרי 600ms
  };

  // התחלת משחק
  useEffect(() => {
    setMode(0);
    setTimeout(() => {
      LightKey(props.sequence[0]);
      setMode(1);
    }, 1000);
    setStage(0);
    setClickNum(0);
  }, [props.sequence]);

  // פונקציה של לחיצת השחקן
  const ClientClick = (index: number) => {
    LightKey(index);
    if (mode == 1) {
      // האם הלחיצה של השחקן נכונה
      if (props.sequence[clickNum] === index) {
        // אם השחקן גמר את הסבב הנוכחי
        if (clickNum == stage) {
          // אם נגמר המשחק
          if (clickNum == 7) {
            new Audio(successAudio).play();
            const element = props.elementRef.current;
            const animation = props.animationRef.current;
            if (element) {
              element.style.animationName = 'none';
              void element.offsetWidth;
              element.style.animationName = 'success';
              element.style.animationDuration = '5s';
              element.style.animationTimingFunction = 'ease-in-out';
              element.style.animationIterationCount = '1';
            }
            if (animation) {
              animation.src = "animation/clapping.gif"
            }
            setMode(0);
          }
          // לא נגמר המשחק
          else {
            setStage((prevStage) => prevStage + 1);
          }
          setClickNum(0);
        }
        else {
          setClickNum((prevStage) => prevStage + 1);
        }
      }
      // אם השחקן טעה
      else {
        const animation = props.animationRef.current;
        setTimeout(() => {
          new Audio(failAudio).play();
          const element = props.elementRef.current;

          if (element) {
            setMode(0)
            element.style.animationName = 'none';
            void element.offsetWidth;
            element.style.animationName = 'fail';
            element.style.animationDuration = '1.7s';
            element.style.animationTimingFunction = 'ease-in-out';
            element.style.animationIterationCount = '1';
          }

          if (animation) {
            animation.src = "animation/cry.gif"
          }
        }, 600)
      }
    }
  };

  // איטרציה נוספת של המשחק
  useEffect(() => {
    setMode(0);
    const animation = props.animationRef.current;
    if (animation) {
      animation.src = "animation/wait.gif"
    }
    props.sequence.slice(0, stage + 1).forEach((value, index) => {
      setTimeout(() => {
        console.log(index + " index " + value + " seq[index]");
        LightKey(value);
        if (index == stage) {
          setMode(1);
        }
      }, 950 * (index + 1));
    });
  }, [stage]);

  // אחרי שהרכיבים טעונים, מוצגים אותם
  if (!StageComponent || !LayerComponent || !RegularPolygonComponent) {
    return <div>Loading...</div>;
  }

  return (
    <StageComponent width={845} height={500}>
      <LayerComponent>
        <RegularPolygonComponent
          x={550}
          y={280}
          sides={6}
          radius={250}
          fill="#e9eaeb"
          stroke="#d2d8dd"
          strokeWidth={3}
          rotation={30}
        />
        {keys.map((key, index) => (
          <Key
            key={index}
            x={key.x}
            y={key.y}
            size={170} // גודל הטרפז
            rotation={key.rotation} // זווית הסיבוב
            fill={key.fill} // צבע הרקע
            onClick={() => ClientClick(index)} // קריאה לפונקציה בלחיצה
            sound={key.sound}
          />
        ))}
      </LayerComponent>
    </StageComponent>
  );
};

export default Simon;



