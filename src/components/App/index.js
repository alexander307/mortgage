import React, { Component } from 'react';
import './App.css';

import CalculatorPage from '../../containers/CalcContainer';
// import YaMap from '../Map';

const App = (props) =>  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={props.logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Калькулятор ипотеки</h1>
          <h5>Будь не псом, но человеком</h5>
        </header>
        <div className="App-intro">
          {/* <ActivePage/> */}
          <CalculatorPage />
        </div>
      </div>
    );
}

export default App;