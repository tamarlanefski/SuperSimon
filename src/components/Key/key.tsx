import React from 'react'
import './key.css'
import { Line } from "react-konva";

interface IKey {
  x: number; // מיקום אופקי
  y: number; // מיקום אנכי
  size: number; // גודל הטרפז
  rotation: number; // זווית סיבוב
  fill: string; // צבע רקע
  stroke?: string; // צבע קו
  strokeWidth?: number; // רוחב קו
  onClick: () => void; // אירוע לחיצה
  sound:string;
}
const Key: React.FC<IKey> = (props) => {
  return (
    <Line
      x={props.x}
      y={props.y}
      points={[0, 0, props.size, 0, props.size / 1.3, props.size / 3, props.size - props.size / 1.3, props.size / 3,]}
      fill={props.fill}
      closed
      stroke={"#d2d8dd"}
      strokeWidth={4}
      rotation={props.rotation}
      onClick={props.onClick} // קריאה לפונקציה בלחיצה
    />
  )
}

export default Key;