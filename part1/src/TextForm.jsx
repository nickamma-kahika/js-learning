import React, { useState } from 'react'
import './TextForm.css'

const TextForm = () => {
    const handleOnClickUpper = () => {
        console.log("uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnClickLower = () => {
        console.log("lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnClickSentence = () => {
        let newText = text.slice(1).toLowerCase();
        newText = text[0].toUpperCase() + newText;
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');

    return (
        <div className="container">
            <div className="input-group">
                <textarea className="form-control" value={text} onChange={handleOnChange} aria-label="With textarea" rows={15}></textarea>
            </div>
            <div className="selfContainer">
                <button type="button" className="btn btn-primary" onClick={handleOnClickUpper}>To UPPERCASE</button>
                <button type="button" className="btn btn-primary" onClick={handleOnClickLower}>To LOWERCASE</button>
                <button type="button" className="btn btn-primary" onClick={handleOnClickSentence}>To SENTENCECASE</button>
            </div>
        </div>
    );
}

export default TextForm;