import { useContext } from 'react';
import { CartContext } from "../../Context/ContextCarrito";
import "./Carrito.scss"
const Carrito = (): JSX.Element => {
  const { carrito, actions } = useContext(CartContext)
  console.log("carrito", carrito)
  const totalPrice: number = Object.values(carrito).reduce((acc: number, curr: any) => acc + curr.price * curr.cantidad, 0)

  const handleClickComprar = ()=>{
    localStorage.setItem("compras", JSON.stringify(carrito))
    actions.clear()
  }

  /* Object.values(carrito).length > 0 ?   */
  return <div className='carritoContent'>
    {
      Object.values(carrito).length > 0 ? (
        <div className='ContenidoCompleto'>
          <div className='productosCarrito'>
            {Object.values(carrito).map((item)=>{
              return(
            <div className='Producto'>
              <img src={item.image} width={'50px'} alt="" />
              <h5>{item.title}</h5>
              <h5>${item.price}</h5>
              <h5>Cant.{item.cantidad}</h5>
              <h5>Total: ${item.cantidad * item.price}</h5>
            </div>
            )
            })}

          </div>
          <div className='footerCarrito'>
            <h4>No. Productos {Object.values(carrito).length}</h4>
            <h3>TOTAL: {totalPrice.toFixed(2)} MXN</h3>
            <button className='comprarBTN' onClick={handleClickComprar}>Comprar</button>
          </div>
        </div>
      ) : <h2>No hay nada en el carrito, comienza a comprar amigo :D</h2>
    }
  </div>
}

export default Carrito  