import './App.css';
import React from "react";
import Header from './components/TopBar/Header';
import Home from './components/Home';
import Forecast from './forecast';
import Stock from './components/Stock/stock.js'


function App() {
 

  return (
    <div className="App">
      <Header/>
      <div className='flex max-md:flex-col'>
        <Forecast/>
        <Stock/>
      </div>
      
      <Home />

    </div>
  );
}

export default App;
