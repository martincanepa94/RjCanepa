export const Boton = ( {text, click, children}) => {

    return (
        <button className="my-boton" onClick={click}>{text}</button>
    )
}