import { useRef } from "react"

export const Busqueda = ({setBuscarPersonaje}) =>{
    const inputRef = useRef()
    return<>
    <h1>Busqueda de personajes:</h1>
        <input type="text" 
        placeholder="Ingrese un personaje"
        ref={inputRef}/>
        <button onClick={()=>{setBuscarPersonaje(inputRef.current.value)}}>Buscar</button>
    </>
}