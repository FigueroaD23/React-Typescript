
import "./Inicio.scss";
import { ListOfProducts } from "../../components/ListOfProducts/ListOPIndex";
import { useEffect, useState } from "react";
import { ProdResponseFromAPI } from "../../interface/ProdResponseFromAPI";
import Producto from "../../interface/Producto";

const IndexInicio = () => {
  const [productos, setProductos] = useState<Producto[]>([])
  useEffect(() => {
    const fetchProducts = async ():Promise<ProdResponseFromAPI> => {
      const res = await fetch('https://fakestoreapi.com/products?limit=5');
      return await res.json();      
    }
    const mapFromApiToProds = (apiResponse : ProdResponseFromAPI ):Array<Producto>=>{      
      return apiResponse.map(prodFromAPI=>{
        const {id,title,price,description,image} = prodFromAPI
        return {id,title,price,description,image,stock:Math.round(Math.random()*30)}
      })
    }
    fetchProducts()
      .then(apiProducts =>{
        const productosYabien = mapFromApiToProds(apiProducts)
        console.log(productosYabien)
        setProductos(productosYabien)
      })
      
  },[])
  
  return (
    <div className="container">
      
      <ListOfProducts Productos={productos}/>
    </div>
  )
}

export default IndexInicio