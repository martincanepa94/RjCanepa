// Lo primero que va en el archivo App.js son las importaciones de mis componentes
// Luego los incluimos en el return como etiqueta.
// Importamos tambien la hoja de estilos css que creamos.

import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { Boton } from "./components/Boton/Boton";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import { Form } from "./components/Form/Form";

import { Contacto } from "./components/NavBar/Contacto";
import { Nosotros } from "./components/NavBar/Nosotros";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  
  return (


    
    <BrowserRouter>

      <NavBar />

      
      <Routes>
        <Route path="/" element={ <ItemListContainer/> } />
        <Route path='/productos/:catId' element={ <ItemListContainer/> } />
        <Route path='/detail/:itemId' element={ <ItemDetailContainer/> } />
        <Route path='/contacto' element={ <Contacto/> } />
        <Route path='/nosotros' element={ <Nosotros/> } />

        <Route path='*' element={ <Navigate to='/'/> } />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
