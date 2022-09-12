import { createContext, useState} from "react";
import Producto from "../interface/Producto";

type CartType = {[productId:number]:Producto}

type CartContextType = {
    carrito: {[productId:number]:Producto};
    actions:{
        add:(product:Producto) => void; 
        clear:()=>void ;
        addLocalCart: (carrito:CartType)=> void;      
    }
}

const initialValue:CartContextType = {
    carrito: {},
    actions:{
        add:()=>{},  
        clear:()=>{},   
        addLocalCart:()=>{}      
    }
}

export const CartContext = createContext<CartContextType>(initialValue)

interface PropsContext {
    children:JSX.Element
}

export function CartProvider ({children}:PropsContext){   
    const [carrito, setCarrito] = useState<CartType>({}) 
    return(
        <CartContext.Provider value={
            {
                carrito,
                actions:{
                    add:(product:Producto)=>{                        
                        return setCarrito((curr)=>({...curr,
                            [product.id]:{...product}}))
                    },  
                    clear:()=>{
                        return setCarrito({})
                    },
                    addLocalCart:(carrito:CartType)=>{
                        return setCarrito(carrito)
                    }
                }
            }
        }>
            {children}
        </CartContext.Provider>
    )

}

