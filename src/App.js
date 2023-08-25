
import './App.css';
import Navbar from './components/Navbar';
import Forms from './components/TextForm'
import Footer from './components/Footer';
import React, {useState} from 'react'
// import About from './components/About'

function App() {
  const[mode, setMode] = useState('dark'); 

  return (
    <>
      <Navbar title="TextUtiles" aboutText="About us" mode={mode}/>
      <div className="container my-3" mode={mode}>
      {/* <About/> */}
      <Forms heading="Enter the text to Analyze" mode={mode}/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
