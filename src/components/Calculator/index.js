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
            <div className = "calcBlock">
                <ValueBlock value = {this.props.value}/>
                <ValueBlock value = {this.props.value} />
                <ValueBlock value = {this.props.value}/>
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