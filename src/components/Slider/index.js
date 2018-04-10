import React, { Component } from 'react'
import './style.sass'

class Slider extends Component {

  render() {
    return (
      <div className="Slider">
          <input  type="range"
                  min="0" 
                  max="5000000" 
                  step="100000" 
                  defaultValue= {this.props.value}
                  className = "Slider__input" />
      </div>
    );
  }
}

export default Slider