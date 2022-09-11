import "./Producto.scss"
export const Producto = () => {
    return (
        <div className="producto">
            <img src={'https://image.shutterstock.com/image-photo/set-makeup-eyes-faces-women-600w-1933547759.jpg'} alt="" />
            <h3>Nombre producto</h3>
            <hr style={{ background: 'black', width: '100%' }} />
            <div className="agrupados">
                <p>$100 MXN</p>
                <p>Stock: 25</p>
            </div>
            <button className="AddCartBtn">Añadir carrito</button>
        </div>
    )
}