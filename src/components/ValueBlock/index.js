import React, { Component } from 'react';
import './style.sass';

import Label from '../Label'
import Field from '../Field'
import Slider from '../Slider' 



export const ValueBlock = (props) => {

    return (
      <div className="ValueBlock">
        <Label label = {props.label} />
        <Field value = {props.value} setVal = {props.setVal}/>
        <Slider value = {props.value} setVal = {props.setVal} style = {{'margin-top': '-10px'}}/>
      </div>
    );
}

export default ValueBlock;