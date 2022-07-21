import React, { useState } from 'react'
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { Routes, Route } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [txtColor, setTxtColor] = useState(null)

  const showAlert = (message, type)=> {
      setAlert({
        msg : message,
        type : type
      });

      setTimeout(() => {
        setAlert(null)
      },2000);
  }

  const setColors = () => {
    if(txtColor === 'green'){
      setTxtColor('green')
       document.body.style.backgroundColor = 'green';
       document.body.style.color = 'white'
    }
  }

  const toggle = ()=> {

    if(mode === 'green'){
      setMode('green')
      document.body.style.backgroundColor = 'green';
      document.body.style.color = 'white'
      showAlert("Green mode has been enabled", "success")
    }

   else if(mode === 'light'){
       setMode('dark')
       document.body.style.backgroundColor = '#042743';
       document.body.style.color = 'white'
       document.title = 'Utils - Dark Mode'
       showAlert("Dark mode has been enabled", "success")
   }

   else{
       setMode('light')
       document.body.style.backgroundColor = 'white'
       document.body.style.color = 'black'
       document.title = 'Utils - Light Mode'
       showAlert("Light mode has been enabled", "success")
   }
  }

  return (
    <>

        {/* Navbar componenet */}
        <Navbar title="Text Editor" txtColor = {txtColor} setColors = {setColors}  aboutText="About" mode={mode} setMode={toggle}/>

        {/* Alert component */}
        <Alert  alertMsg={alert} />

        {/* Text form component */}
          {/* <TextForm showAlert = {showAlert} heading = "Enter the text to analyze" mode={mode} /> */}
        
        {/* About Component */}
          {/* <About/> */}

        <Routes>
          <Route path="/" element={<TextForm showAlert = {showAlert} heading = "Enter the text to analyze" mode={mode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      

        
    </>
  );
}

export default App;
