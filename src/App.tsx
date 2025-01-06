import {  useState } from 'react'
import './App.css'
import Menu from './components/Menu/menu'
import Main from './components/Main/main'

function App() {
  const [sequence, setSequence] = useState<number[]>([]);

   
  return (
    <>

      <Main sequence={sequence}/>
      <Menu setSequence={setSequence} />

    </>
  )
}

export default App
