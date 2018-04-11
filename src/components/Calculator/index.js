import React, { Component } from 'react';
import './style.sass';


import {ValueBlock} from '../../components/ValueBlock'
import Switcher from '../../components/Switcher'
import CalculateButton from '../../components/CalculateButton'

const Calculator = (props) => {
  
    return (
      <div className="Calculator">
            <div className = "Calculator__calc-block">
            <p>  ---- {JSON.stringify(props.calculator.total_sum.value)}</p>
                <ValueBlock 
                  label = {props.calculator.total_sum.label} 
                  value = {props.calculator.total_sum.value}
                  setVal = {props.setVal}
                  />
                <ValueBlock 
                  label = {props.calculator.first_contribution.label} 
                  value = {props.calculator.first_contribution.value}
                  setVal = {props.setVal}
                />
                <ValueBlock 
                  label = {props.calculator.term.label} 
                  value = {props.calculator.term.value} 
                  term_unit = {props.calculator.term.term_unit}
                  setVal = {props.setVal}
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