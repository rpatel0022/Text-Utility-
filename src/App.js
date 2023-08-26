
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import Footer from './components/Footer';
import React, {useState} from 'react'
import Alert from './components/Alert';
import About from './components/About'
import {
  BrowserRouter as Router, 
  Switch, 
  Route,  
} from "react-router-dom"

function App() {
  const[mode, setMode] = useState('light'); 
  const[alert, setAlert] = useState(null); 

  let showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null); 
    }, 1500); 

  }
  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "grey"
      showAlert("Dark Mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been enabled", "success")
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3" mode={mode}>
      <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode}/>
          </Route>
      </Switch>
      <Footer/>
      </div>
    </Router>
    </>
  );
}

export default App;
