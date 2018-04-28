import React, { Component } from 'react';
import './style.sass';


import {ValueBlock} from '../../components/ValueBlock'
import Switcher from '../../components/Switcher'
import CalculateButton from '../../components/CalculateButton'
import ResultBlock from '../../components/ResultBlock'
import ResultTable from '../ResultTable';

const Calculator = (props) => {
  
    return (
      <div>
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
            {
                props.calc_result_table != false &&
                <div>
                    <div className = "Calculator__results">
                        <ResultBlock />
                    </div>
                    <ResultTable calcTable = {props.calc_result_table}/>
                </div>
            }


        </div>

      </div>

    );
}

export default Calculator