import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { getProductById } from '../../asyncMock';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [itemId]);

    return (
        <div className='ItemDetailContainer'>
            {product ? (
                <div className="ProductDetail">
                    <h2>{product.name}</h2>
                    <img src={product.img} alt={product.name} className="ProductImage" />
                    <p><strong>Precio:</strong> ${product.price}</p>
                    <p><strong>Stock disponible:</strong> {product.stock}</p>
                    <p><strong>Categoría:</strong> {product.category}</p>
                    <p><strong>Descripción:</strong> {product.description}</p>
                </div>
            ) : (
                <p>Cargando producto...</p>
            )}
        </div>            
    );
}

export default ItemDetailContainer;

