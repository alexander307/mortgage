import React, { Component } from 'react';
import './style.sass';


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
            <div className = "Calculator__calc-block">
                <ValueBlock 
                  label = {this.props.calculator.total_sum.label} 
                  value = {this.props.calculator.total_sum.value}
                  setVal = {this.props.setVal}
                  />
                <ValueBlock 
                  label = {this.props.calculator.first_contribution.label} 
                  value = {this.props.calculator.first_contribution.value}
                  setVal = {this.props.setVal}
                />
                <ValueBlock 
                  label = {this.props.calculator.term.label} 
                  value = {this.props.calculator.term.value} 
                  term_unit = {this.props.calculator.term.term_unit}
                  setVal = {this.props.setVal}
                  />
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