import React, { Component } from 'react';
import './style.sass';

import Label from '../Label'
import Field from '../Field'
import Slider from '../Slider' 



export const ValueBlock = (props) => {
    let settings = props.settings
    let settingsObj = {}

    for (let key in settings) {
      settingsObj[key] = settings[key]
    }

    let { id, label, value, min, max, step } = settingsObj

    return (    
      <div className="ValueBlock">
        <Label label = {label} />
        <Field id = {id} 
              min = {min}
              max = {max}
              value = {value} 
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