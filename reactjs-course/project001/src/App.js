import './App.css';

import Event3 from './components/Eventos/Event3';

function mensagem(){
  alert("Olá, essa mensagem foi dsparada por uma funcção!")
}

function App() {

  return (
    <div className="App">
  
      <Event3 />
      
    </div>
  );
}

export default App;
