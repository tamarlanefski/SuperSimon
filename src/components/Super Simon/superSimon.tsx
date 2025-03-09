import './superSimon.css'

interface IsuperSimon {
  elementRef: React.RefObject<HTMLDivElement>
  animationRef: React.RefObject<HTMLImageElement>
}

const SuperSimon: React.FC<IsuperSimon> = (props) => {


  return (
    <div id="wrapper">
      <img ref={props.animationRef} src="public/animation/wait.gif"></img>
      <div ref={props.elementRef}>
        Super Simon
      </div>
    </div>
  )
}

export default SuperSimon;
