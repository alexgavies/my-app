import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

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
    </div>
  );
}

export default App;
