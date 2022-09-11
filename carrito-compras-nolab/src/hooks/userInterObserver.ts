import { useState, useEffect} from 'react'

interface IObserverProps {
    distancia:string
    externalRef: any
    once:boolean
}
export default function useCercaPantalla({ distancia, externalRef, once}:IObserverProps){
  
    const [show, setShow] = useState(false)    
    useEffect(() => { 
      const element = externalRef.current      
      const observandoFunction = (entries:any,observer:any)=>{      
        const el = entries[0]
        if (el.isIntersecting) { 
            console.log("estáaaa interseccionando")         
          setShow(true)
          once && observer.disconnect()
        } else {          
          !once && setShow(false)
        }
      }
  
      const observer = new IntersectionObserver(observandoFunction,{
        rootMargin:distancia
      })
      if(element) observer.observe(element)
        
      return()=> observer && observer.disconnect()
    })
  
    return {show}
  }