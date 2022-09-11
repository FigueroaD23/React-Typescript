import { createContext, useState} from "react";
import Producto from "../interface/Producto";

type CartType = {[productId:number]:number}

type CartContextType = {
    carrito: {[productId:number]:number};
    actions:{
        add:(productId: number) => void;
        remove:(productId: number) => void;
    }
}

const initialValue:CartContextType = {
    carrito: {},
    actions:{
        add:()=>{},
        remove: ()=>{}
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
                    add:(productId:number)=>{
                        return setCarrito((curr)=>({...curr,
                            [productId]:(curr[productId] || 0) +1}))
                    },
                    remove:(productId:number)=>{
                        return setCarrito((curr)=>({...curr,
                            [productId]:curr[productId] ? curr[productId] - 1: 0}))
                    }
                }
            }
        }>
            {children}
        </CartContext.Provider>
    )

}

