export const Catalogo = ({personaje}) => {
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