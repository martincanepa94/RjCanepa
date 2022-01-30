import { Contenedor } from "../Contenedor/Contenedor";
import { Item } from "../Item/Item";
import { Boton } from "../Boton/Boton"
import { Clicker } from "../Clicker/Clicker"
import {useState, useEffect} from 'react'
import { pedirDatos } from "../../helpers/pedirDatos"
import { Producto } from "../Producto/Producto"
import { stock } from "../../data/stock"

export const ItemList = ( {productos} ) => {

    const [clicker, setClicker] = useState(true)

    const mostrar = ()=>{
        setClicker(!clicker)
    }

    return (
        <Contenedor>
            <h2>Productos:</h2>
            <hr/>
            <div className="row">
    
            { stock.map( (el, i) => <Item  key={el.id} {...el}/>)}
    
            </div>
            <hr />
            
    
    
            <Boton click={mostrar}>Mostrar clicker</Boton>
    
            <hr/>
            { clicker === true? <Clicker/> : null}
    
        </Contenedor>

    )

    }