import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';

function App() {

const[show, setShow]=useState({
  state:false,
  user:null
});


  return (
    <div className="App">
      <h2>Queremos saber más de ti!</h2>
     {!show.state ? <Form setShow={setShow}/>: <Card user={show.user}/>}
    </div>
  );
}

export default App;
