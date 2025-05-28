import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ContextoUsuarioProvider } from './contextos/contexto_usuario.jsx'
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './rutas/rutas.jsx'
import { Header } from "./componentes/Header.jsx";
import { Footer } from "./componentes/Footer.jsx";

function App() {


  return (
    
    <ContextoUsuarioProvider>

      <BrowserRouter>
          <Header />
        
          <AppRoutes />
        
          <Footer />
      </BrowserRouter>

    </ContextoUsuarioProvider>


  )
}

export default App
