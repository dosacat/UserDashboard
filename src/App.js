import './App.css';
import React from "react";
import Header from './components/TopBar/Header';
import Home from './components/Home';
import Forecast from './forecast';


function App() {
 

  return (
    <div className="App">
      <Header/>
      <Forecast/>
      <Home/>

    </div>
  );
}

export default App;
