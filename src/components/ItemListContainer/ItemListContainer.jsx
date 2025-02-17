import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { getProducts, getProductById } from "../../asyncMock.jsx";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        
        const asyncFunc = categoryId ? () => getProducts().then(products => products.filter(product => product.category === categoryId)) : getProducts;

        asyncFunc()
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [categoryId]);

    return (
        <div>
            <h1 className="greeting">{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;
