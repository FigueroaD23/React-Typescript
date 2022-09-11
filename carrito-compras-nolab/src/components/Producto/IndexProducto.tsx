import "./Producto.scss"
import IProducto from "../../interface/Producto";
interface propsProducto {
    Producto:IProducto
}
export const Producto = ({Producto}:propsProducto) => {
    return (
        <div className="producto">
            <img src={Producto.image} alt="" />
            <h5>{Producto.title}</h5>
            <hr style={{ background: 'black', width: '100%' }} />
            <div className="agrupados">
                <p>${Producto.price}MXN</p>
                <p>Stock: {Producto.stock}</p>
            </div>
            <button className="AddCartBtn">Añadir carrito</button>
        </div>
    )
}