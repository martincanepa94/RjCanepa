// Lo primero que va en el archivo App.js son las importaciones de mis componentes
// Luego los incluimos en el return como etiqueta.
// Importamos tambien la hoja de estilos css que creamos.

import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { Boton } from "./components/Boton/Boton";
import "./style.css"

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a Bodega de Vinos Malvin"/>
    </>
  );
}

export default App;
