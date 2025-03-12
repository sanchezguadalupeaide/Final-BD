import { useEffect, useState } from 'react'
import './App.css'
import { Busqueda } from './Componentes/Busqueda'
import { PersonajeBuscado } from './Componentes/PersonajeBuscado'
import { Catalogo } from './Componentes/Catalogo'

function App() {
  const [buscarPersonaje, setBuscarPersonaje] = useState("")
  const [personaje, setPersonajes] = useState([])


  const traerPersonaje = async () => {
    let respuesta = await fetch(`https://rickandmortyapi.com/api/character`)
    let datos = await respuesta.json()
    setPersonajes(datos.results)
    console.log(datos)
  }
  useEffect(() => {
    if (buscarPersonaje !== "") {
      traerPersonaje();
    }
  }, [buscarPersonaje]);

  return (
    <>
      <Catalogo personaje={personaje}/>
      <Busqueda setBuscarPersonaje={setBuscarPersonaje} />
      <PersonajeBuscado buscarPersonaje={buscarPersonaje} personaje={personaje} setPersonajes={setPersonajes}/>
    </>
  )
}

export default App