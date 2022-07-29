import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import FormUseState from './components/FormUseState';

function App() {
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
    </div>
  );
}

export default App;
