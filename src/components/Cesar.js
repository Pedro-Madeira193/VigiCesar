import './Cesar.css'
import { useState } from 'react';

function Cesar({name, title, cript, descript}) {
    const [textToCript, setTextToCript] = useState('');
    const [criptToText, setCriptToText] = useState('');

    return(
        <div className="container" id={name}>
            <div className='header'>
                <h1 className='title'>{title}</h1>
            </div>
            <div className='main'>
                <div className='inputsContainer'>
                    <div className='textToCript'>
                        <textarea placeholder='texto para criptografia' style={{resize: "none"}} onChange={(e) => setTextToCript(e.target.value)} value={textToCript}></textarea>
                        <button type='button' className='cesarBtn' onClick={() => setCriptToText(cript(textToCript))}>criptografar</button>
                    </div>
                    <div className='criptToText'>
                        <textarea placeholder='criptografia para texto' style={{resize: "none"}} onChange={(e) => setCriptToText(e.target.value)} value={criptToText}></textarea>
                        <button type='button' className='cesarBtn' onClick={() => setTextToCript(descript(criptToText))}>descriptografar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cesar