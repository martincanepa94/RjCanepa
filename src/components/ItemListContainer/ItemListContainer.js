// Siempre que creo un componente: export, declarar la funcion arrow con un retorno.
// La propiedad greeting la recibo como parametro desestructurado de App.js
// Le agrego un nombre de clase a la seccion que retornara este componente para poder darle un estilo.

// Importamos la hoja de estilo asociado a mi componente. Se recomienda tener una hoja de estilo para 
// cada componente.


import "./ItemListContainer.css"
import { Boton } from "../Boton/Boton"
import { Contenedor } from "../Contenedor/Contenedor"
import { Clicker } from "../Clicker/Clicker"
import {useState, useEffect, useContext} from 'react'
import { pedirDatos } from "../../helpers/pedirDatos"
import { Producto } from "../Producto/Producto"
import { stock } from "../../data/stock"
import { Item } from "../Item/Item"
import { ItemList } from "../ItemList/ItemList"
import { Loader } from "../Loader/Loader"
import { useParams } from "react-router-dom"


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const { catId } = useParams()

    console.log(catId)
    console.log(productos)


    useEffect( () => {
        setLoading(true)

        pedirDatos()
            .then( (res) => {
                if (catId) {

                    setProductos(res.filter((el) => el.categoria === catId ))

                    
                } else {
                    setProductos(res)
                }
                
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })


    }, [catId])

    return (
            <>
            {
                loading ? 
                <Loader />
                : <ItemList productos={productos}/>
            }
                
            </>

    )
}