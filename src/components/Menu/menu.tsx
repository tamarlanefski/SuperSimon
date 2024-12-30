// import { useState } from 'react'
import Start from '../Start/start'
import './menu.css'

interface IMenu{
  setSequence:React.Dispatch<React.SetStateAction<number[]>>
}

const Menu: React.FC<IMenu> = (props) =>{

  return (
    <div className='menu'>
      <Start setSequence={props.setSequence}/>
      
    </div>
  )
}

export default Menu