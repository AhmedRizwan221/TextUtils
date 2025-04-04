import React, {useState} from "react";
const TextForm = (props) => {
    const [text, setText] = useState("");

    const handleUpChange = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoChange = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClear = () => {
        setText('');
    }
    return (
        <>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control my-3" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary mx-2" onClick={handleUpChange}>Convert text uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoChange}>Convert text Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
            </div>
            <div className="container" >
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} charactors</p>
                <p>{ 0.008 * text.split(" ").length } Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
            
        </>
    );
}
export default TextForm;