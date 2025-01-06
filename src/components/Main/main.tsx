import React, { useRef } from 'react'
import Simon from '../Simon/simon'
import SuperSimon from '../Super Simon/superSimon'
import './main.css'
import '/superSimonimg.png'
import UserNameBox from '../UserName/userName'


interface IMain {
  sequence: number[]
}

const Main: React.FC<IMain> = (props) => {

  const elementRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<HTMLImageElement>(null)

  return (
    <div className="main">
      <UserNameBox/>
      <SuperSimon elementRef={elementRef} animationRef={animationRef} />
      <Simon sequence={props.sequence} elementRef={elementRef} animationRef={animationRef} />


    </div>
  )
}

export default Main