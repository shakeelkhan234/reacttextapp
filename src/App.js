import React from 'react';
//import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
  

;

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">

      <TextForm heading="enter the text to Analyze"/>
      </div>
     
    </div>
  );
}

export default App;
