import './App.css'
import Chat from './Componentes/Chat'
import Usuario from './Componentes/Usuario'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase';

function App() {

  const [usuario] = useAuthState(auth);

  return (
    <div className="App">
      <Usuario />
      <Chat />
    </div>
  )
}

export default App
