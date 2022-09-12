import "./Producto.scss"
import IProducto from "../../interface/Producto";
import useInterObserver from "../../hooks/userInterObserver";
import {CartContext} from "../../Context/ContextCarrito";

import { useContext, useRef, memo, useEffect } from "react";
interface propsProducto {
    Producto:IProducto
}
const Producto = ({Producto}:propsProducto) => {  
  useEffect(() => {
    const carritoLocal = localStorage.getItem("carrito")
    if(carritoLocal!=null){
      console.log("carritoLocal",JSON.parse(carritoLocal))
      actions.addLocalCart({...JSON.parse(carritoLocal)})
    }
  }, [])
  
    const handleClick = ()=>{                        
        //console.log(producto)    
        localStorage.setItem("carrito",JSON.stringify(carrito))     
        if(!carrito.hasOwnProperty(Producto.id)){   
          console.log("primera vez")         
          carrito[Producto.id] = {...Producto}          
          actions.add({...Producto,cantidad:1})
          const carritoaux = {...carrito}        
          return
        }
        if(carrito.hasOwnProperty(Producto.id) && carrito[Producto.id].cantidad < carrito[Producto.id].stock){
          console.log("segunda vez")
          const carritoaux = {...carrito}  
          Producto.cantidad = carritoaux[Producto.id].cantidad + 1;
          carritoaux[Producto.id] = {...Producto}          
          actions.add({...Producto})          
          return
        }        
        alert("no hay más stock")
        
        
      }  
    const {carrito,actions} = useContext(CartContext)
    const gifRef = useRef(null)  
    const {show} = useInterObserver({distancia:'10px',externalRef:gifRef,once:false})
    return (
        <div className={`producto ${show?'visible':''}`} ref={gifRef}>
            <img src={Producto.image} alt="" />
            <h5>{Producto.title}</h5>
            <hr style={{ background: 'black', width: '100%' }} />
            <div className="agrupados">
                <p>${Producto.price}MXN</p>
                <p>Stock: {Producto.stock}</p>
            </div>
            <button className="AddCartBtn" onClick={handleClick}>Añadir carrito</button>
        </div>
    )
}

export default memo(Producto,(prevProps,nextProps) =>{
    return prevProps.Producto.id === nextProps.Producto.id
  })