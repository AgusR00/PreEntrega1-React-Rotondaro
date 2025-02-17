import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/" className="NavBrand">
                <h1>Electronic-Mania</h1>
            </Link>
            <div className="Categories">
                <NavLink to={'/category/Celulares'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
                <NavLink to={'/category/Auriculares'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Auriculares</NavLink>
            </div>
            <div className="CartContainer">
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;
