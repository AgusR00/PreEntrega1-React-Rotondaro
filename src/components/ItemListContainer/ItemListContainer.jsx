import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [titulo, setTitulo] = useState("Productos")
  const category = useParams().category

  useEffect(() => {
   
    if (category) {

      const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1)
      setTitulo(categoryTitle)
    } else {
      setTitulo("Productos")
    }

    const productosRef = collection(db, "productos")
    const q = category ? query(productosRef, where("category", "==", category)) : productosRef

    getDocs(q).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        }),
      )
    })
  }, [category])

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer

