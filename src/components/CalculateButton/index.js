import React, { Component } from 'react';
import './style.sass';

class CalculateButton extends Component {

  render() {
    return (
      <div style = {{"paddingTop": "30px"}}>
        <button className = 'calculateButton'>CalculateButton</button>
      </div>
        
    );
  }
}

export default CalculateButton