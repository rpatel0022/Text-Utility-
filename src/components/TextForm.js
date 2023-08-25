import React, {useState} from 'react';


function TextForm(props) {
    const [text, setText] = useState("");
    const [isSpeaking, setIsSpeaking] = useState(false); 

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    
    const handUpClick = () => {
        let newText = text.toUpperCase(); 
        setText(newText)
    }

    const handLoClick = () => {
        let newText = text.toLowerCase(); 
        setText(newText)
    }

    const handclearClick = () => {
        let newText = ""; 
        setText(newText)
    }

    // const speak = () => {
    //     let msg = new SpeechSynthesisUtterance();
    //     msg.text = text;
    //     window.speechSynthesis.speak(msg);
    // }



        const speak = () => {
        if (!isSpeaking) {
            let msg = new SpeechSynthesisUtterance();
            msg.text = text;
            window.speechSynthesis.speak(msg);
            setIsSpeaking(true); // Set isSpeaking to true when speaking starts
        } else {
            window.speechSynthesis.cancel(); // Stop speaking
            setIsSpeaking(false); // Set isSpeaking to false when speaking stops
        }
    }

    function capitalized(){
        var arr = text.split(" ")
        var c = arr.length
        var temp = ""
        while(c!==0){
            temp = arr[c-1].charAt(0).toUpperCase()+arr[c-1].substring(1).toLowerCase()+" "+temp
            c--;
        }

        setText(temp)
    }

    const removeWhiteSpace = () => {
        let updatedText = text.replace(/\s/g, '');
        setText(updatedText);
    };

    const calculateReadingTime = () => {
        const wordCount = text.split(" ").filter(word => word !== "").length; // Exclude empty words
        let minutes = 0;
        let seconds = 0;
    
        if (wordCount > 0) {
            minutes = Math.floor(wordCount / 260); // Assuming average reading speed of 260 words per minute
            seconds = Math.floor((wordCount % 260) / 4); // Convert remaining words to seconds (average: 4 words per second)
        }
    
        return `${minutes} min ${seconds} sec`;
    };

    const copyText = () => {
        var text = document.getElementById("my-box");
        text.select(); 
        navigator.clipboard.writeText(text.value)
    }

    const handleExtraSpaces= () => {
        let newText = text.split(/[ ]+/); 
        setText(newText.join(" "))
    }
    
    return (
        <>
        <div className='container '>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" cols="30" rows="15"></textarea>
            </div>
            
            <button className="btn btn-warning mx-2 my-2" onClick={handUpClick}>Convert to Upper Case</button>
            <button className="btn btn-warning mx-2 my-2" onClick={handLoClick}>Convert to Lower Case</button>
            <button className="btn btn-warning mx-2 my-2" onClick={capitalized}>Capitalized</button>
            <button className="btn btn-warning mx-2 my-2" onClick={removeWhiteSpace}>Remove WhiteSpace</button>
            <button className="btn btn-warning mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
            <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2"> {isSpeaking ? 'Stop Speaking' : 'Start Speaking'} </button>
            <button className="btn btn-warning mx-2 my-2" onClick={copyText}>Copy text</button>
            <button className="btn btn-warning mx-2 my-2" onClick={handclearClick}>Clear</button>

        </div>
        <div className="container my-3">
            <h2>Your text Summary</h2>
            {/* <p>{text.split(" ").length - 1} Words, {text.length} characters</p> */}
            <div>
            <p>{calculateReadingTime()}</p>
        </div>
        </div>
        </>
    );
}

export default TextForm; 


