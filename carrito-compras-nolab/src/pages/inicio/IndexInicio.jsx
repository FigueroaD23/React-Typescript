
import "./Inicio.scss";
import { Producto } from "../../components/Producto/IndexProducto";
const IndexInicio = () => {
  return (
    <div className="container">
      <div className="ListOfProducts">
      <Producto/>
      <Producto/>
      <Producto/>
      <Producto/>
      <Producto/>
      <Producto/>
      <Producto/>
      </div>

    </div>
  )
}

export default IndexInicio