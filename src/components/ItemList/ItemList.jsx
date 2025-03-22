import Item from "../Item/Item"
import './ItemList.css'


const ItemList = ({ titulo ,productos }) => {
    return (
        <div className="container">
            <h1 className="main-title">{titulo}</h1>

            <div className="productos">
                { productos.map((prod) => <Item producto={prod} key={prod.id}/>) }
            </div>
        </div>
    )
}

export default ItemList