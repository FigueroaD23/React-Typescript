import "./ListOP.scss"
import Producto from "../../components/Producto/IndexProducto";
import IProducto from "../../interface/Producto";
interface ListOfProps {
    Productos: IProducto[]
}
export const ListOfProducts = ({ Productos }: ListOfProps) => {
    return (
        <div className="ListOfProducts">
            {
                Productos.map((item) => {
                    return <Producto Producto={item} key={item.id}/>
                })
            }

        </div>

    )
}
