import './start.css'
import { BsPlayCircleFill } from "react-icons/bs";

interface IStart{
  setSequence:React.Dispatch<React.SetStateAction<number[]>>
}
const Start: React.FC<IStart> = (props) => {

  const startGame = () => {
    const sequence = []
    for (let index = 0; index < 8; index++) {
      sequence.push(Math.floor(Math.random() * 6))
    }
    props.setSequence(sequence);

  }

  return (
    <div id="containStartGame">
      <BsPlayCircleFill  />
      <div onClick={startGame} id="startGame">start game</div>
    </div>
  )
}

export default Start