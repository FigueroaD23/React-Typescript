import { useEffect, useRef, useState } from 'react'
import List from "./components/List";
import Form from "./components/Form";
import './App.css'
import {Sub} from "./interfaces/Sub";


function App() {
  const [subs, setSubs] = useState<Sub[]>([])
  const divRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // setSubs(initial_state)
    fetch("../../src/consumo/Subs.json")
      .then(resp => resp.json())
      .then(subs=>{
        console.log(subs)
        setSubs(subs)
      })
      
  }, [])
  
  const handleNewSub = (newSub:Sub):void=>{
    setSubs(subs=>[...subs,newSub])
  }

  return (
    <div className='container' ref={divRef}>
      <h2>midu subs con TS</h2>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub}/>
    </div>
  )
}

export default App
