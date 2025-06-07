import './Cesar.css'
import { useState } from 'react';

function Cesar({name, title, cript, descript, keyPlaceholder}) {
    const [textToCript, setTextToCript] = useState('');
    const [criptToText, setCriptToText] = useState('');
    const [key, setKey] = useState(0);

    return(
        <div className="container" id={name}>
            <div className='header'>
                <h1 className='title'>{title}</h1>
            </div>
            <div className='main'>
                <input type='text' placeholder={keyPlaceholder} className='chave' onChange={(e) => setKey(e.target.value)}></input>
                <div className='inputsContainer'>
                    <div className='textToCript'>
                        <textarea placeholder='texto para criptografia' style={{resize: "none"}} onChange={(e) => setTextToCript(e.target.value)} value={textToCript}></textarea>
                        <button type='button' className='cesarBtn' onClick={() => setCriptToText(cript(textToCript,key))}>criptografar</button>
                    </div>
                    <div className='criptToText'>
                        <textarea placeholder='criptografia para texto' style={{resize: "none"}} onChange={(e) => setCriptToText(e.target.value)} value={criptToText}></textarea>
                        <button type='button' className='cesarBtn' onClick={() => setTextToCript(descript(criptToText,key))}>descriptografar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cesar