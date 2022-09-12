import { ProdResponseFromAPI } from "../interface/ProdResponseFromAPI";
import Producto from "../interface/Producto";

async function fetchProducts(page:number): Promise<ProdResponseFromAPI> {
    const res = await fetch('https://fakestoreapi.com/products?limit='+page);
    return await res.json();
}
const mapFromApiToProds = (apiResponse: ProdResponseFromAPI): Array<Producto> => {
    return apiResponse.map(prodFromAPI => {
        const { id, title, price, description, image } = prodFromAPI
        return { id, title, price, description, image, stock: Math.round(Math.random() * 30),cantidad:0 }
    })
}
export default async function GetProductsService(pagina:number) {
    const apiProducts =  await fetchProducts(pagina)        
    const productosYabien = mapFromApiToProds(apiProducts)
    console.log(productosYabien)
    return productosYabien
            //   setProductos(productosYabien)        
}