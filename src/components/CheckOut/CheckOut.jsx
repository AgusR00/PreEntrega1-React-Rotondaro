import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import './CheckOut.css';

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("");
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    
    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
        .then((doc) => {
            setPedidoId(doc.id);
            vaciarCarrito();
        })
    }

    if (pedidoId) {
        return (
            <div className="checkout-container orden-confirmada">
                <h1 className="main-title">¡Gracias por tu compra!</h1>
                <p>Tu pedido ha sido procesado con éxito.</p>
                <p>Tu código de pedido es: <span className="pedido-id">{pedidoId}</span></p>
                <p className="mensaje-final">Recibirás un correo electrónico con el detalle de tu pedido y los datos para realizar el pago.</p>
            </div>
        )
    }

    return (
        <div className="checkout-container">
            <h1 className="main-title">Finalizar compra</h1>
            <form className="checkout-form" onSubmit={handleSubmit(comprar)}>
                <input 
                    type="text" 
                    placeholder="Ingresá tu nombre" 
                    {...register("nombre", { required: true })}
                />
                <input 
                    type="email" 
                    placeholder="Ingresá tu e-mail" 
                    {...register("email", { required: true })}
                />
                <input 
                    type="tel" 
                    placeholder="Ingresá tu teléfono" 
                    {...register("telefono", { required: true })}
                />
                <button type="submit">Finalizar compra</button>
            </form>
        </div>
    )
}

export default Checkout