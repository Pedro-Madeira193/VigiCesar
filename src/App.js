import './App.css';
import Cesar from './components/Cesar'

function App() {

  function cesarCript(text, key){
    let res = "";
    text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    text = text.toLowerCase();
    text = text.replace(/[^a-zA-Z]/g, '');
    for(let i = 0;i < text.length;i++){
      let temp = text.charCodeAt(i);
      if(temp > 123 || temp < 97){
        return "Por favor utilize letras de A-Z";
      }
      if(key < 0){
        return "valor da chave deve ser igual ou maior que 0";
      }
      key = parseInt(key);
      if(!Number.isInteger(key)){
        return "chave deve ser um número inteiro";
      }
      temp = ((temp - 97 + key) % 26) + 97;
      temp = String.fromCharCode(temp);
      res = res + temp;
    }
    return res.replaceAll("-64"," ");
  }

  function cesarDecript(text, key){
    let res = "";
    text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    text = text.toLowerCase();
    text = text.replace(/[^a-zA-Z]/g, '');
    for(let i = 0;i < text.length;i++){
      let temp = text.charCodeAt(i);
      if(temp > 123 || temp < 97){
        return "Por favor utilize letras de A-Z";
      }
      if(key < 0){
        return "valor da chave deve ser igual ou maior que 0";
      }
      key = parseInt(key);
      if(!Number.isInteger(key)){
        return "chave deve ser um número inteiro";
      }
      temp = ((temp - 97 - key + 26) % 26) + 97;
      temp = String.fromCharCode(temp);
      res = res + temp;
    }
    return res.replaceAll("-64"," ");
  }

  function vigenereCript(text, key){
    let res = "";
    let newKey = "";
    text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    text = text.toLowerCase();
    text = text.replace(/[^a-zA-Z]/g, '');
    text = text.replaceAll(" ","");
    key = key.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    key = key.toLowerCase();
    key = key.replace(/[^a-zA-Z]/g, '');
    key = key.replaceAll(" ","");

    if(key.length > text.length || key.length < 1){
      return "chave não pode ser maior que o tamanho da palavra e deve ser maior que 0";
    }

    for(let i = 0; i < text.length;i++){
      newKey = newKey + key[i % key.length];}

    for(let i = 0; i < text.length;i++){
      let temp = text.charCodeAt(i) - 97;
      let keyTemp = newKey.charCodeAt(i) - 97;
      let sum = (temp + keyTemp) % 26;
      res = res + String.fromCharCode(sum + 97);
    }
    return res;
  }

  function vigenereDecript(text, key){
    let res = "";
    let newKey = "";
    text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    text = text.toLowerCase();
    text = text.replace(/[^a-zA-Z]/g, '');
    text = text.replaceAll(" ","");
    key = key.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    key = key.toLowerCase();
    key = key.replace(/[^a-zA-Z]/g, '');
    key = key.replaceAll(" ","");

    if(key.length > text.length || key.length < 1){
      return "chave não pode ser maior que o tamanho da palavra e deve ser maior que 0";
    }
    
    for(let i = 0; i < text.length;i++){
      newKey = newKey + key[i % key.length];}

    for(let i = 0; i < text.length;i++){
      let temp = text.charCodeAt(i) - 97;
      let keyTemp = newKey.charCodeAt(i) - 97;
      let sum = (temp + keyTemp) % 26;
      res = res + String.fromCharCode(sum + 97);
    }
    return res;
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
      <Cesar name="Cesar" title="Cifra de César" cript={cesarCript} descript={cesarDecript} keyPlaceholder='número chave'/>
      <Cesar name="Vigenere" title="Cifra de Vigenére" cript={vigenereCript} descript={vigenereDecript} keyPlaceholder='texto chave'/>
    </div>
  );
}

export default App;
