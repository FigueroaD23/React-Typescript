import "./Producto.scss"
import IProducto from "../../interface/Producto";
import useInterObserver from "../../hooks/userInterObserver";
import {CartContext} from "../../Context/ContextCarrito";
import { useContext, useRef } from "react";
interface propsProducto {
    Producto:IProducto
}
export const Producto = ({Producto}:propsProducto) => {
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
            <button className="AddCartBtn" onClick={()=>{actions.add(Producto.id)}}>Añadir carrito</button>
        </div>
    )
}