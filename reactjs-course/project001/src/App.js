import './App.css';
import HelloWord from './components/HelloWord';
import SayName from './components/SayName';
import People from './components/People';
import Botao from './components/Botao/Botao';
import Lista from './components/Lista/Lista';

function mensagem(){
  alert("Olá, essa mensagem foi dsparada por uma funcção!")
}

function App() {
  const name = "Mateus"
  const estadoCivil = "Solteiro"
  const dataNascimento = "10/04/2005"
  const morada = "Rua B, nº 134"
  const nivelAcademico = "Ensino Médio"
  const formacao = "Informática"
  return (
    <div className="App">
      <button onClick={mensagem} > Clical aqui</button>
      <p>Alterando o JSX e manipulando funções</p>
      <HelloWord/>
      <SayName nome="Estanislau" />
      <SayName nome={name} />
      <People nome={name} 
      dataNascimento={dataNascimento}
      estadoCivil={estadoCivil}
      morada={morada}
      nivelAcademico={nivelAcademico}
      formacao={formacao}
       />
      <Botao/>
      <Lista />
      
    </div>
  );
}

export default App;
