import React, { Component } from 'react';
import './index.css';

import Label from '../Label'
import Field from '../Field'
import Slider from '../Slider' 



class ValueBlock extends Component {

  render() {
    return (
      <div className="ValueBlock">
        This is Value Block
        <Label label = {this.props.label} />
        <Field value = {this.props.value} />
        <Slider value = {this.props.value} />
      </div>
    );
  }
}

export default ValueBlock;