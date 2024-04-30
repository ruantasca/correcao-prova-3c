import './App.css'
import Evento from './components/Evento.jsx'
import Galeria from './components/Galeria.jsx'
import Cabecalho from './components/Cabecalho.jsx'
import Rodape from './components/Rodape.jsx'

function App(){
  return(
    <>
    <Cabecalho />
    <Evento 
    titulo={"evento Senai"}
    descricao={"dormir"}
    hora={"12:00"}
    local={"motel"}
/>
<Galeria />
<Rodape />
    </>
  )
}

export default App