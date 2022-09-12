import { createContext, useState} from "react";
import Producto from "../interface/Producto";

type CartType = {[productId:number]:Producto}

type CartContextType = {
    carrito: {[productId:number]:Producto};
    actions:{
        add:(product:Producto) => void;        
    }
}

const initialValue:CartContextType = {
    carrito: {},
    actions:{
        add:()=>{},        
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
                }
            }
        }>
            {children}
        </CartContext.Provider>
    )

}

