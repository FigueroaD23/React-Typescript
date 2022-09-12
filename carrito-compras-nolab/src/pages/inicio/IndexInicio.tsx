
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
  const [loading, setLoading] = useState<boolean>(false)
  const {show} = useInterObserver({distancia:'10px', externalRef: escuchador, once:false} )
  useEffect(() => {
    setLoading(true)
      getProductsService(pagina).then((productosAPI)=>{
        setProductos(productosAPI)
        setLoading(false)
      })  
  },[pagina])
  
  const paginacion = ()=>{
    setPagina((prev)=>{return prev+5})
  }

  const debounceHandleNextPage = useCallback(debounce(paginacion, 100)
  ,[]) 

  useEffect(() => {
   if(show && pagina<20) debounceHandleNextPage()        
  },[debounceHandleNextPage, show])
  
  return (
    <div className="container">      
      <h5 style={{marginBottom:'-40px', marginTop:'20px'}}>Mostrando {pagina} resultados de 20</h5>
      <ListOfProducts Productos={productos}/>
      <div ref={escuchador}>{loading?"cargando":""}</div>
    </div>
  )
}

export default IndexInicio