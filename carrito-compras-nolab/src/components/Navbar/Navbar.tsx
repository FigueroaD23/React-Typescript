import {
    NavLink
} from "react-router-dom";
import "./Navbar.scss"
export const Navbar = () => {

    return (
        <div className="nav-container">
            <nav>
                <NavLink to='/' exact activeClassName="nav-active">INICIO</NavLink>
                <a role={'button'} onClick={()=>console.log("algo")} className="carrito">
                    Carrito <img width={'20px'} src="https://cdn-icons-png.flaticon.com/512/3807/3807663.png" alt="" /><span id="cart_menu_num">5</span>
                    </a>                
            </nav>
        </div>
    )
}