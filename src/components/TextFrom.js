import React, {useState} from "react";
const TextForm = (props) => {
    const [text, setText] = useState("Enter text here !");

    const handleUpChange = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log('On change');
        setText(event.target.value);
    }
    return (
        <>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control my-3" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary" onClick={handleUpChange}>Convert text uppercase</button>
            </div>
        </>
    );
}

export default TextForm;