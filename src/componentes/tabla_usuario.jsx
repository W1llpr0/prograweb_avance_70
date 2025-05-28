import { useContext } from 'react';
import { ContextoUsuario } from '../contextos/contexto_usuario.jsx';


export function TablaUsuario() {
    const { usuarios } = useContext(ContextoUsuario);

    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                    <th>DNI</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map((usuario, index) => (
                    <tr key={index}>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.apellido}</td>
                        <td>{usuario.correo}</td>
                        <td>{usuario.DNI}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}