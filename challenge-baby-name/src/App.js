import React from 'react';
import logo from './logo.svg';
import './App.css';
import BabyName from './BabyName';
import babyNamesData from "./babyNamesData.json"

function App() {
  return (
    <div className="App">
      <BabyName names= {babyNamesData}/>
    </div>
  );
}

export default App;
