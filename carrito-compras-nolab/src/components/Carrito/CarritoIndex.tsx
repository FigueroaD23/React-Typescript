import { useContext } from 'react';
import {CartContext} from "../../Context/ContextCarrito";
const Carrito = () => {
    const {carrito,actions} = useContext(CartContext)
    const totalPrice:number = Object.values(carrito).reduce((acc:number,curr:any)=>acc+curr.precio*curr.cantidad,0)
  return (
    <div>
        <span>items in cart: {Object.values(carrito).length}</span>
        <br />
        <span>total price: {totalPrice.toFixed(2)}</span>
    </div>
  )
}

export default Carrito  