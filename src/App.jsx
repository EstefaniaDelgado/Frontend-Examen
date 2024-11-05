import './App.css'
import Card from './components/Card'

function App() {
 
const msj = " Hola, soy una tarjeta"
  return (
    <div className='App'>
       <h1>Carga de estudiantes</h1>
      <form></form>
      <Card msj={msj}/>
    </div>
  )
}

export default App
