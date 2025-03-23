import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from './components/Contacto/Contacto';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito/Carrito';
import CheckOut from './components/CheckOut/CheckOut';

function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path="/productos/:category" element={<ItemListContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} /> {/*Busca la información de un item por su id*/}
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='/checkout' element={<CheckOut />} />
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
