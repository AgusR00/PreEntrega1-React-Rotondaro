import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
    return (
        <div className='producto'>
            <img src={producto.img} alt={producto.name} />
            <div className='producto-info'>
                <h4>{producto.name}</h4>
                <p>Precio: ${producto.price}</p>
                <p>Categoría: {producto.category}</p>
                <Link className='ver-mas' to={`/item/${producto.id}`}>Ver más</Link>
             </div>
        </div>
    )
}

export default Item