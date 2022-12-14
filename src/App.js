
import './App.css';

import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

 


  return (
    <div className="App">
        
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<ItemListContainer saludo="Todos nuestros productos"/>}/>
      <Route path='categorias/:idCategorias' element={<ItemListContainer/>}/>
      <Route path='/detalles/:idProductos' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<h1>ERROR 404: Pagina no encontrada</h1>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
