import React, { Component } from 'react'
import './style.sass'

class Calculator extends Component {

  render() {
    return (
      <div className="Slider">
          <input type="range" min="0" max="100" step="1" defaultValue="50" class = "Slider__input" />
      </div>
    );
  }
}

export default Calculator