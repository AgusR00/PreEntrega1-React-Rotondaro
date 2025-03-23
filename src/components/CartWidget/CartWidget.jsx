import { FaCartShopping } from "react-icons/fa6";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {

    const {cantidadEnCarrito} = useContext(CartContext);

    return (

        <div className="cart-widget">
            <Link to="/carrito" className='carrito'>
                <FaCartShopping />
                <span className="cart-number">{cantidadEnCarrito()}</span>
            </Link>
        </div>
    );
};

export default CartWidget;
