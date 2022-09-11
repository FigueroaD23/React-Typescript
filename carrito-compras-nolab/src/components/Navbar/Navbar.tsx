import {
    NavLink
} from "react-router-dom";
import "./Navbar.scss"
import {CartContext} from "../../Context/ContextCarrito";
import { useContext } from "react";
export const Navbar = () => {
    const {carrito,actions} = useContext(CartContext)
    return (
        <div className="nav-container">
            <nav>
                <NavLink to='/' exact activeClassName="nav-active">LOGO</NavLink>
                <a role={'button'} onClick={()=>console.log("algo")} className="carrito">
                    Carrito <img width={'20px'} src="https://cdn-icons-png.flaticon.com/512/3807/3807663.png" alt="" /><span id="cart_menu_num">{Object.values(carrito).length}</span>
                    </a>                
            </nav>
        </div>
    )
}