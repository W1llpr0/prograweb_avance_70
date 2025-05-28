import { Routes, Route } from "react-router-dom";
import Registro from "../paginas/Registro.jsx";
import { TablaUsuario } from "../componentes/tabla_usuario.jsx";


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Registro />} />
      <Route path="/usuarios" element={<TablaUsuario />} />
    </Routes>
  );
}