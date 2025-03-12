import { useEffect } from "react"

export const Catalogo = ({ buscarPersonaje, personaje, setPersonajes }) => {

    const traerPersonaje = async () => {
        let respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${buscarPersonaje}`)
        let datos = await respuesta.json()
        setPersonajes(datos.results)
        console.log(datos)
    }
    useEffect(() => {
        if (buscarPersonaje !== "") {
            traerPersonaje();
        }
    }, [buscarPersonaje]);


    return <>
        <table border={1}>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Imagen</th>
                    <th>Especie</th>
                </tr>
            </thead>
            <tbody>
                {personaje.map((elemento, indice) => {
                    return <tr key={indice}>
                        <td>{elemento.name}</td>
                        <td><img src={elemento.image} height={150} width={150} /></td>
                        <td>{elemento.species}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}