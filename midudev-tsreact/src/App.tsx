import { useEffect, useRef, useState } from 'react'
import List from "./components/List";
import Form from "./components/Form";
import './App.css'
import {Sub} from "./interfaces/Sub";

const initial_state = [
  {
    nickname: "Angel",
    months: 3,
    avatar: "https://i.pravatar.cc/150?img=4",      
  },
  {
    nickname: "Midudev",
    months: 21,
    avatar: "https://i.pravatar.cc/150?img=1",
    description: "Me enseñó React"
  },
  {
    nickname: "Bluuweb",
    months: 12,
    avatar: "https://i.pravatar.cc/150?img=3",
    description: "Me enseñó Js y Vue",    
  }
]

function App() {
  const [subs, setSubs] = useState<Sub[]>([])
  const divRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    setSubs(initial_state)
      
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
