import React, { Component } from 'react';
import './style.sass';

import Label from '../Label'
import Field from '../Field'
import Slider from '../Slider' 



class ValueBlock extends Component {
  constructor() {
    super()
  }


  render() {
    console.log(this.props, 'Value Block props')
    return (
      <div className="ValueBlock">
        <Label label = {this.props.label} />
        <Field value = {this.props.value} setVal = {this.props.setVal}/>
        <Slider value = {this.props.value} />
      </div>
    );
  }
}

export default ValueBlock;