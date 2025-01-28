import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
    return (
        <nav>
            <h1>Electro-Manía</h1>
            <ul>
                <li>Productos</li>
                <li>Placas de video</li>
                <li>Procesadores</li>
                <li>Memorias RAM</li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;