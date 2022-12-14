import {
    NavLink
} from "react-router-dom";
import "./Navbar.scss"
import { CartContext } from "../../Context/ContextCarrito";
import { useContext, useState } from "react";
import Carrito from "../../components/Carrito/CarritoIndex";
import Modal from "../../components/Modal/Modal";
export const Navbar = () => {
    const { carrito, actions } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)

    const onCloseModal = ()=>{
        setShowModal(false)
    }
    return (
        <div className="nav-container">
            <nav>
                <NavLink to='/' exact activeClassName="nav-active">LOGO</NavLink>
                <a role={'button'} onClick={()=>{setShowModal(true)}} className="carrito">
                    Carrito <img width={'20px'} src="https://cdn-icons-png.flaticon.com/512/3807/3807663.png" alt="" /><span id="cart_menu_num">{Object.values(carrito).length}</span>
                </a>
            </nav>
            {showModal ? <Modal onClose={onCloseModal}><Carrito/></Modal> : null}
        </div>
    )
}