
import { createContext, useState, useContext} from "react";


export const ContextoUsuario = createContext();

export function ContextoUsuarioProvider(props){

    const [usuarios, setUsuarios] = useState([]);

    const agregarUsuario = (usuario) =>{
        setUsuarios((usuarioPrevio) => [...usuarioPrevio, usuario]);
    };
    return(
    <ContextoUsuario.Provider value ={{usuarios, agregarUsuario}}> {props.children}</ContextoUsuario.Provider>);
};

export function useContextoUsuario() {
    const contexto = useContext(ContextoUsuario);
    if (!contexto) {
        throw new Error("el contexto de usuario debe ser usado dentro de un UsuarioContextoProvider");
    }
    return contexto;
}


