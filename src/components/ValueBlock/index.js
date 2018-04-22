import React, { Component } from 'react';
import './style.sass';

import Label from '../Label'
import Field from '../Field'
import Slider from '../Slider' 
import SmallSwitcher from '../SmallSwitcher'


export const ValueBlock = (props) => {
    let settings = props.settings
    let settingsObj = {}

    for (let key in settings) {
      settingsObj[key] = settings[key]
    }

    let { id, label, value, min, max, step, hasSwitcher, termUnit, divide } = settingsObj


    return (    
      <div className="ValueBlock">

        <div className="ValueBlock__top-elems-wrapper">
          <Label label = {label} />
          {hasSwitcher &&
             <SmallSwitcher
                id = {id}
                termUnit = {termUnit} 
                switchTermUnit = {props.functions.switchTermUnit}
             /> }
        </div>

        <Field id = {id} 
              min = {min}
              max = {max}
              value = {value} 
              divide = {divide} 
              setVal = {props.functions.setVal}/>
        <Slider id = {id}
                      min = {min}
                      max = {max}
                      step = {step}
                value = {value} 
                setVal = {props.functions.setVal} 
                style = {{'margin-top': '-10px'}}/>
      </div>
    );
}

export default ValueBlock;