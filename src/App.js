import './App.css';
import Cesar from './components/Cesar'

function App() {
  return (
    <div className="App">
      <nav>
        <a id='cesarNavBtn' href='#CesarCont'>C</a>
        <a id='vigenereNavBtn' href='#home'>V</a>
      </nav>
      <header>
        <h1>VigiCesar</h1>
        <span>descriptador e encriptador</span>
      </header>
      <div id="menu">
        <h2>escolha qual deseja decifrar/cifrar:</h2>
        <div>
          <a href='#menu' className='mainBtns' id='cesarBtn'>cesar</a>
          <a href='#menu' className='mainBtns' id='vigenereBtn'>vigenere</a>
        </div>
      </div>
      <Cesar name="a" id="CesarCont"/>
    </div>
  );
}

export default App;
