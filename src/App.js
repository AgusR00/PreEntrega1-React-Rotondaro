import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path="/productos/:category" element={<ItemListContainer />} />
          <Route path="/productos/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} /> {/*Busca la información de un item por su id*/}
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
