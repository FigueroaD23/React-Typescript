import "./Producto.scss"
import IProducto from "../../interface/Producto";
import useInterObserver from "../../hooks/userInterObserver";
import {CartContext} from "../../Context/ContextCarrito";

import { useContext, useRef, memo } from "react";
interface propsProducto {
    Producto:IProducto
}
const Producto = ({Producto}:propsProducto) => {  
    const handleClick = ()=>{                        
        //console.log(producto)    
        
        if(!carrito.hasOwnProperty(Producto.id)){   
          console.log("primera vez")         
          const carritoaux = {...carrito}
          carrito[Producto.id] = {...Producto}
          console.log("carritoaux",carritoaux)      
          actions.add({...Producto,cantidad:1})
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
    const {show} = useInterObserver({distancia:'0px',externalRef:gifRef,once:false})
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