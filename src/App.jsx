import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ContextoUsuarioProvider } from './contextos/contexto_usuario.jsx'
import { CrearUsuario } from './componentes/usuario.jsx'
import { TablaUsuario } from './componentes/tabla_usuario.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <ContextoUsuarioProvider>

      <CrearUsuario/>
      <TablaUsuario/>

    </ContextoUsuarioProvider>


  )
}

export default App
