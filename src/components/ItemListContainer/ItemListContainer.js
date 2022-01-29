// Siempre que creo un componente: export, declarar la funcion arrow con un retorno.
// La propiedad greeting la recibo como parametro desestructurado de App.js
// Le agrego un nombre de clase a la seccion que retornara este componente para poder darle un estilo.

// Importamos la hoja de estilo asociado a mi componente. Se recomienda tener una hoja de estilo para 
// cada componente.


import "./ItemListContainer.css"
import { Boton } from "../Boton/Boton"

export const ItemListContainer = ( {greeting} ) => {

    const clickear = () => {
        console.log('Boton clickeado')
    }

    return (
    <section className="item-list-container">
        <h2>{greeting}</h2>
        <hr />

    </section>


    )
}