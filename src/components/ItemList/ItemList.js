import { Contenedor } from "../Contenedor/Contenedor";
import { Item } from "../Item/Item";
import {useState, useEffect} from 'react'

export const ItemList = ( {productos} ) => {

    const [clicker, setClicker] = useState(true)

    const mostrar = ()=>{
        setClicker(!clicker)
    }

    return (
        <Contenedor>
            <hr />
            <h2>Productos:</h2>
            <hr/>
            <div className="row">
    
            { productos.map( (el, i) => <Item  key={el.id} {...el}/>)}
    
            </div>
    
        </Contenedor>
    ) }