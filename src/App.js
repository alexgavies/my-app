import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import FormUseState from './components/FormUseState';
import Condicional from './components/Condicional';
import SeuNome from './components/SeuNomeLiftState';
import {useState} from 'react'
import Saldacao from './components/Saldacao';

function App() {

  const [nome2,setNome]= useState()//State lift
  
  const nome="Maria"
  return (
    <div className="App">
    <h1>Ola Mundo</h1>

    <Frase/>

    <HelloWorld/>

    const nome="Maria"
    <SayMyName nome="João"/>
    <SayMyName nome={nome}/>

    <Pessoa
      nome="Rodrigo"
      idade ="29"
      profissao="Programador"
      foto="htpps://via.placehoder.com/150"
    />
    <List/>

  <Evento numero={1}/>
  <Evento numero={2}/>

  <Form></Form>

  <FormUseState/>

  <Condicional/>

    <div>
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/> 
      {nome2}
    </div>
    <Saldacao nome={nome2}/>
  </div>

    
  );
}

export default App;
