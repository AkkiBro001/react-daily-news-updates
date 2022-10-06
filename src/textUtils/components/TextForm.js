import React, { useState } from 'react'
//!Here we create TextForm Component 
export const TextForm = (props) => {
    //!Here we use state hooks
    const [text, setText] = useState('')

    //!This function trigger when user made changes in Input
    const onChangeHandler = (event) => {
        setText(event.target.value);
        
    }

    //!This function trigger when user click on Convert To UpperCase btn
    const upperCaseFunction = () => {
        //if text is empty return Value is empty in alert [danger alert]
        if(text === '') return props.alertfn("Value is empty", "danger")
        //Here we change the value to UpperCase and update it using setText. 
        const newText = text.toUpperCase();
        setText(newText);
        //Here we set a success alert
        //!props.alertfn means showAlert (message, type) in textUtilsMain.js
        props.alertfn("Converted to Uppercase", "success")
    }

    //!This function trigger when user click on Convert To LowerCase btn
    const lowerCaseFunction = () => {
        //if text is empty return Value is empty in alert [danger alert]
        if(text === '') return props.alertfn("Value is empty", "danger")
        //Here we change the value to LowerCase and update it using setText. 
        const newText = text.toLowerCase();
        setText(newText);
        //Here we set a success alert
        //!props.alertfn means showAlert (message, type) in textUtilsMain.js
        props.alertfn("Converted to Lowercase", "success")
    }

     //!This function trigger when user click on Convert To TitleCase btn
     const titleCaseFunction = () => {
         //if text is empty return Value is empty in alert [danger alert]
        if(text === '') return props.alertfn("Value is empty", "danger")
        //Here we change the value to TitleCase and update it using setText. 
        let newText = String(text).split(' ');
        newText = newText.map(word => {
            {/* 
                //!Here we use if statement for (word.charAt(0).match(/\W/) if 1st word is not a word [\W means not a word] 
                //!Then next word is capitilize e.f (seg) (Seg)
                //!Here '(' this is not word so next word 's' should be capitilize
            */}
            if(word.charAt(0).match(/\W/)){
               return word.charAt(0) + word.charAt(1).toUpperCase() + word.slice(2).toLowerCase()
            }else{
                {/* Here first letter set upperCase then rest are lowerCase */}
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            }
        }).join(' ')
        setText(newText);
        //Here we set a success alert
        //!props.alertfn means showAlert (message, type) in textUtilsMain.js
        props.alertfn("Converted to Titlecase", "success")
    }

    //!This function trigger when user click on Copy text
    const copyTextFunction = () => {
        //if text is empty return Value is empty in alert [danger alert]
        if(text === '') return props.alertfn("Value is empty", "danger")
        //!Here we used navigator.clipboard.writeText to store text in clipboard;
        navigator.clipboard.writeText(text);
        //Here we set a success alert
        //!props.alertfn means showAlert (message, type) in textUtilsMain.js
        props.alertfn("Copied to clipbord", "success")
    }

     //!This function trigger when user click on handleExtraSpace
     const handleExtraSpace = () => {
         //if text is empty return Value is empty in alert [danger alert]
        if(text === '') return props.alertfn("Value is empty", "danger")
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        //Here we set a success alert
        //!props.alertfn means showAlert (message, type) in textUtilsMain.js
        props.alertfn("Extra spaces removed", "success")
    }


    //!This function trigger when user click on Clear text
    const clearFunction = () => {
        //Here we change the value to Clear text and update it using setText. 
        const newText = '';
        setText(newText);
        //Here we set a success alert
        //!props.alertfn means showAlert (message, type) in textUtilsMain.js
        props.alertfn("Text Cleared", "success")
    }
     return (
        <>
        <div className={`container text-${props.modes === 'light' ? 'dark' : 'light'}`}>
            <h2 className='mt-4'>{props.heading}</h2>
            <div className="mb-3">
                {/* //!Here we must use onChange handler cause here we set value= {text} */}
                <textarea className={`form-control bg-${props.modes} text-${props.modes === 'light' ? 'dark' : 'light'}`} id="textForm" rows="8" value={text} onChange = {onChangeHandler} placeholder='Enter Text here...'></textarea>
            </div>
            {/* Here if text is nothing then disable the buttons using ternary operator */}
            <button className={`btn btn-${text.length === 0 ? 'secondary' : 'primary'} mx-1 my-1 ${text.length === 0 ? 'disabled' : ''}`} onClick={upperCaseFunction}>Convert To UpperCase</button>
            <button className={`btn btn-${text.length === 0 ? 'secondary' : 'primary'} mx-1 my-1 ${text.length === 0 ? 'disabled' : ''}`} onClick={lowerCaseFunction}>Convert To LowerCase</button>
            <button className={`btn btn-${text.length === 0 ? 'secondary' : 'primary'} mx-1 my-1 ${text.length === 0 ? 'disabled' : ''}`} onClick={titleCaseFunction}>Convert To TitleCase</button>
            <button className={`btn btn-${text.length === 0 ? 'secondary' : 'primary'} mx-1 my-1 ${text.length === 0 ? 'disabled' : ''}`} onClick={copyTextFunction}>Copy Text</button>
            <button className={`btn btn-${text.length === 0 ? 'secondary' : 'primary'} mx-1 my-1 ${text.length === 0 ? 'disabled' : ''}`} onClick={handleExtraSpace}>Remove Extra Space</button>
            <button className={`btn btn-${text.length === 0 ? 'secondary' : 'primary'} mx-1 my-1 ${text.length === 0 ? 'disabled' : ''}`} onClick={clearFunction}>Clear Text</button>
        </div>
        {/* //!Here we used simpl javascript to add more logics */}
        <div className={`container my-3 text-${props.modes === 'light' ? 'dark' : 'light'}`}>
            <h2>Text Summary</h2>
            <ul>
                {/* //!Here we used regular expression /\s+/ becuse we need to count word with a new line as well */}
                <li><b>Total Words :</b> {text.split(/\s+/).filter(word => word !== "").length}</li>
                <li><b>Total Characters :</b> {text.length}</li>
                <li><b>Total Min. to Read :</b> {(0.008 * text.split(/\s+/).filter(word => word !== "").length).toFixed(2)}</li>
            </ul>
            <h3>Preview</h3>
            {/*//! Here we used ternary operator  if text is empty string then return preview msg else return text */}
            <p>{text === '' ? 'Nothing to Preview' : text}</p>
        </div>
        </>
    )
}
