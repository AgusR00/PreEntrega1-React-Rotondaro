import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './Carrito.css'

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className='carrito-container'>
            <h1 className='main-title-carrito'>Carrito</h1>

            <div className='items-carrito'>
                {
                    carrito.map((prod) => (
                        <div className='info-carrito' key={prod.id}>
                            <h3>{prod.name}</h3>
                            <p className='precio-unit'>Precio unit: ${prod.price}</p>
                            <p className='precio-total'>Precio total: ${prod.price * prod.cantidad}</p>
                            <p>Cant: <span className='cantidad'>{prod.cantidad}</span></p>
                        </div>
                    ))
                }
            </div>

            {carrito.length > 0 ? (
                <div className='carrito-resumen'>
                    <h2 className='precio-total'>Precio total: ${precioTotal()}</h2>
                    <div className='carrito-acciones'>
                        <button className='btn-vaciar' onClick={handleVaciar}>Vaciar carrito</button>
                        <Link className='btn-finalizar' to='/checkout'>Finalizar compra</Link>
                    </div>
                </div>
            ) : (
                <div className='carrito-vacio'>
                    <h2>El carrito está vacío</h2>
                </div>
            )}
        </div>
    )
}

export default Carrito