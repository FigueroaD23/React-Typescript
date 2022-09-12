import { useContext } from 'react';
import { CartContext } from "../../Context/ContextCarrito";
import "./Carrito.scss"
const Carrito = (): JSX.Element => {
  const { carrito, actions } = useContext(CartContext)
  console.log("carrito", carrito)
  const totalPrice: number = Object.values(carrito).reduce((acc: number, curr: any) => acc + curr.price * curr.cantidad, 0)

  /* Object.values(carrito).length > 0 ?   */
  return <div>
    <div>
      {
      Object.values(carrito).length > 0 ?(
        <>
        <img className="imgCarrito" src={Object.values(carrito)[0].image} alt="" />
        <span>items in cart: {Object.values(carrito).length}</span>
        <br />
        <span>total price: {totalPrice.toFixed(2)}</span>
        </>
      ) : <h2>No hay nada en el carrito, comienza a comprar amigo :D</h2>
      }
    </div>
  </div>
}

export default Carrito  