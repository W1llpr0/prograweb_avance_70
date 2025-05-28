

import React, {useState, useContext} from "react";

import { useContextoUsuario } from "../contextos/contexto_usuario.jsx";

export function CrearUsuario() {
    
    const {agregarUsuario} = useContextoUsuario();
    
    const [correo, setCorreo] = useState("");
    const [nombre, setNombre] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [apellido, setApellido] = useState("");
    const [DNI, setDNI] = useState("");
    const [confirmarContrasena, setConfirmarContrasena] = useState("");
    


    const respuesta = (e) => {

        e.preventDefault();
        if (contrasena !== confirmarContrasena) {
            alert("Las contraseñas no coinciden");
            return;
        }

        agregarUsuario({
            correo,
            nombre,
            apellido,
            DNI,
            contrasena
        });
        setApellido("");
        setNombre("");
        setCorreo("");
        setDNI("");
        setContrasena("");
        setConfirmarContrasena("");
        alert("Usuario creado");


    }

    return (
        <form onSubmit={respuesta}>
            <input type="text" placeholder="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input type="text" placeholder="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
            <input type="email" placeholder="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
            <input type="text" placeholder="DNI" value={DNI} onChange={(e) => setDNI(e.target.value)} />    
            <input type="password" placeholder="contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
            <input type="password" placeholder="confirmar contraseña" value={confirmarContrasena} onChange={(e) => setConfirmarContrasena(e.target.value)} />
            <button type="submit">Crear cuenta de usuario</button>

        </form>

    );

}