import React, { useState } from 'react'
import './textUtils.css';
import NavBar from './components/NavBar';
import WhatILearn from './components/whtLearnTextUtils';
import { TextForm } from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {Routes, Route, BrowserRouter } from 'react-router-dom'; //!Here we use react-router-dom for Single Page Application

function TextUtilsMain() {
  //!Here we used useState to change dark and light theme to website.
  const [mode, setMode] = useState('light')

  //!This function handle the dark and light theme of website.
  const handleModeFn = () => {
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#292e33';
        //!Here we call showAlert to setAlert and display it
        showAlert('Dark Mode is enabled', 'success')
      }else{
        setMode('light')
        document.body.style.backgroundColor =  '#ebeced';
        //!Here we call showAlert to setAlert and display it
        showAlert('Light Mode is enabled', 'success')
      }
  }

  //!Here we used useState to show alert.
  const [alert, setAlert] = useState (null);

  //!Here we used showAlert for update the value of alert using setAlert.
  //!Here it need 2 parameters : e.g showAlert ('Copied to clipboard', success)
  function showAlert (message, type) {
    setAlert({
        msg: message,
        type: type
    })

    //!Here set alert to null so alert box disapper after 1.5 sec
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  return <>
    {/* 
        //* 1. import components related to "react-router-dom"  e.g import {Routes, Route, BrowserRouter } from 'react-router-dom';
        //* 2. Here we wrap first all compnent to BrowserRouter react-router-dom
        //* 3. Here inside Routes > warp all component that comes after we click link or update url e.g : Home, About, http://localhost:3000/about.
        //* 4. Here inside Routes > we used Route component inside it give to it url path e.g : path="/about".
              //*All path are link with 'Link' component in Nav Bar. e.g : <Link className="nav-link active" aria-current="page" to="/">Home</Link> 
        //* 5. And Here we used another attribute element which we store component element={<About />}
    */}
    <BrowserRouter>
              <NavBar title = "TextUtlis" aboutText = "About Us" modes = {mode} handleMode = {handleModeFn}/>
              <Alert alert = {alert}/>
      <Routes>
            
        
              <Route exact path="/about" element={<About modes = {mode}/>}/>
              <Route exact path="/" element={<TextForm heading = "Try TextUtils - Word Counter, Charater Counter, Remove Extra Spaces" modes = {mode} alertfn = {showAlert}/>}/>
              <Route exact path="/whatilearn" element={<WhatILearn modes = {mode}/>}/>
              
      </Routes>
    </BrowserRouter>
    
      
    
    
  </>
}

export default TextUtilsMain;