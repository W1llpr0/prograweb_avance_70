import { CrearUsuario } from "../componentes/usuario.jsx";
import "../paginas_css/Registro.css";

export default function Registro() {
  return (
    <div className="registro-bg">
      <div className="registro-card">
        <h2>Crear cuenta de usuario</h2>
        <CrearUsuario />
      </div>
    </div>
  );
}