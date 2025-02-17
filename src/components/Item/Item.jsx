import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, img, price, stock }) => {
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decreaseQuantity = () => {
        if (quantity >= 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture className="ItemPicture">
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section className="ItemDetails">
                <p className="Info">Precio: {new Intl.NumberFormat("ar-AR", { style: "currency", currency: "ARS" }).format(
                    price,
                )}</p>
                <p className="Info">Stock disponible: {stock}</p>
            </section>


            <footer className="ItemFooter">
                <div className="CantidadControl">
                    <button className="CantidadBoton" onClick={decreaseQuantity}>-</button>
                    <span className="Cantidad">{quantity}</span>
                    <button className="CantidadBoton" onClick={increaseQuantity}>+</button>
                </div>
                <button className="AgregarCarritoBoton">Agregar al carrito</button>
                <Link to={`/item/${id}`} className="DescriptionBtn">
                    Ver Descripción
                </Link>

            </footer>
        </article>
    );
};

export default Item;