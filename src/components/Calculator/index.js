import React, { Component } from 'react';
import './style.sass';


import {ValueBlock} from '../../components/ValueBlock'
import Switcher from '../../components/Switcher'
import CalculateButton from '../../components/CalculateButton'

const Calculator = (props) => {
  
    return (
      <div className="Calculator">
            <div className = "Calculator__calc-block">
                <ValueBlock 
                  settings = {props.calculator.total_sum} 
                  functions = {{setVal: props.setVal}}
                  />
                <ValueBlock 
                  settings = {props.calculator.first_contribution} 
                  functions = {{setVal: props.setVal}}
                />
                <ValueBlock 
                  settings = {props.calculator.term} 
                  functions = {{setVal: props.setVal}}
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

export default Calculator