import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import productos from '../../data/data'
import { Link } from 'react-router-dom'

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito();
    }


    return (
        <div className='container'>
            <h1 className='main-title'>Carrito</h1>

            {
                carrito.map((prod) => (
                    <div className='info-carrito' key={prod.id}>
                        <h3>{prod.name}</h3>
                        <br />
                        <p>Precio unit: ${prod.price}</p>
                        <p>Precio total: ${prod.price * prod.cantidad}</p>
                        <p>Cant: {prod.cantidad}</p>
                        <br />
                    </div>
                ))
            }

            {carrito.length > 0 ?
                <>
                    <h2>Precio total: ${precioTotal()}</h2>
                    <button onClick={handleVaciar}>Vaciar carrito</button>
                    <Link to='/checkout'>Finalizar compra</Link>
                </> :
                <h2>El carrito está vacío</h2>
            }



        </div>
    )
}

export default Carrito