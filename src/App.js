import './App.css';
import Cesar from './components/Cesar'

function App() {

  function cesarCript(val){
    return val;
  }

  function cesarDescript(val){
    return val
  }

  return (
    <div className="App">
      <nav>
        <a id='cesarNavBtn' href='#Cesar'>C</a>
        <a id='vigenereNavBtn' href='#Vigenere'>V</a>
      </nav>
      <header className='container' id="teste">
        <h1>VigiCesar</h1>
        <span>descriptador e encriptador</span>
      </header>
      <div id="menu" className='container'>
        <h2>escolha qual deseja decifrar/cifrar:</h2>
        <div>
          <a href='#Cesar' className='mainBtns' id='cesarBtn'>cesar</a>
          <a href='#Vigenere' className='mainBtns' id='vigenereBtn'>vigenere</a>
        </div>
      </div>
      <Cesar name="Cesar" title="Cifra de César" cript={cesarCript} descript={cesarDescript}/>
      <Cesar name="Vigenere" title="Cifra de Vigenére" cript={cesarCript} descript={cesarDescript}/>
    </div>
  );
}

export default App;
