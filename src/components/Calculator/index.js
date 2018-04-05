import React, { Component } from 'react';
import './Calculator.css';


import ValueBlock from '../../components/ValueBlock'
import Switcher from '../../components/Switcher'
import CalculateButton from '../../components/CalculateButton'

class Calculator extends Component {

  constructor() {
    super()
    console.log(this.props, 'this.props from calcConstructor')
  }

  render() {
    console.log(this.props, 'calculatorProps');
    return (
      <div className="Calculator">
            This is Calculator
            <div className = "calcBlock">
                <ValueBlock/>
                <ValueBlock/>
                <ValueBlock/>
                <Switcher/>
                <CalculateButton/>
            </div>
            <div className = "mapBlock">
                mapBlock
            </div>
      </div>
    );
  }
}

export default Calculator