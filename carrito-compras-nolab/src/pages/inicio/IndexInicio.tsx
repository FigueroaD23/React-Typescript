
import "./Inicio.scss";
import { ListOfProducts } from "../../components/ListOfProducts/ListOPIndex";
import { useCallback, useEffect, useRef, useState } from "react";
import Producto from "../../interface/Producto";
import useInterObserver from "../../hooks/userInterObserver";
import debounce from "just-debounce-it";
import getProductsService from "../../services/getProducts";

const IndexInicio = () => {
  const [productos, setProductos] = useState<Producto[]>([])
  const [pagina, setPagina] = useState<number>(5)
  const escuchador = useRef<HTMLDivElement>(null)
  const {show} = useInterObserver({distancia:'10px', externalRef: escuchador, once:false} )
  useEffect(() => {
      getProductsService(pagina).then(setProductos)            
  },[pagina])
  

  const debounceHandleNextPage = useCallback(
    ()=>{debounce(setPagina((prev)=>{return prev+5}), 2000)
  },[]) 

  useEffect(() => {
   if(show && pagina<20) debounceHandleNextPage()        
  },[debounceHandleNextPage, show])
  
  return (
    <div className="container">
      <h5 style={{marginBottom:'-40px', marginTop:'20px'}}>Mostrando 5 resultados de 20</h5>
      <ListOfProducts Productos={productos}/>
      <div ref={escuchador}>escuchador</div>
    </div>
  )
}

export default IndexInicio