import React, { Component } from 'react';
import './App.css';

import CalculatorPage from '../../containers/CalcContainer';
// import YaMap from '../Map';

class App extends Component {

  constructor() {
    super()
  }

  render() { 
    // let ActivePage

    // switch (this.props.activePage) {
    //   case 'calculator':
    //     ActivePage = Calculator
    //     break
    //   case 'map':
    //     ActivePage = YaMap
    //     break
    //   default:
    //     ActivePage = Calculator
    // }

    //  console.log(ActivePage)

    return (
      <div className="App">
        <header className="App-header">
          <img src={this.props.logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Калькулятор ипотеки</h1>
          <h5>Не будь псом, будь человеком</h5>
        </header>
        <div className="App-intro">
          {/* <ActivePage/> */}
          <CalculatorPage />
        </div>
      </div>
    );
  }
}

export default App;