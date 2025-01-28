import { FaCartShopping } from "react-icons/fa6";
import "./CartWidget.css";

const CartWidget = () => {
    return (
        
            <div className="cart-widget">
                <FaCartShopping />
                <span className="cart-number">0</span>
            </div>
    );
};

export default CartWidget;
