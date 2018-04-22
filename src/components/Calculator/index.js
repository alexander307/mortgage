import React, { Component } from 'react';
import './style.sass';


import {ValueBlock} from '../../components/ValueBlock'
import Switcher from '../../components/Switcher'
import CalculateButton from '../../components/CalculateButton'

const Calculator = (props) => {
  
    return (
      <div className="Calculator">
            <div className = "Calculator__calc-block">
            {/* {JSON.stringify(props.calculator)} */}
                <ValueBlock 
                  settings = {props.calculator.total_sum} 
                  functions = {{setVal: props.setVal, switchTermUnit: props.switchTermUnit}}
                  />
                <ValueBlock 
                  settings = {props.calculator.first_contribution} 
                  functions = {{setVal: props.setVal, switchTermUnit: props.switchTermUnit}}
                />
                <ValueBlock 
                  settings = {props.calculator.term} 
                  functions = {{setVal: props.setVal, switchTermUnit: props.switchTermUnit}}
                  />
                  <ValueBlock 
                  settings = {props.calculator.percent} 
                  functions = {{setVal: props.setVal, switchTermUnit: props.switchTermUnit}}
                  />
                <Switcher 
                  type = {props.calculator.type}
                  setType = {props.setType }
                  />
                <CalculateButton 
                    calc = {props.calculator.calc_button}
                    calculate = {props.calculate }
                    />
            </div>
      </div>
    );
}

export default Calculator