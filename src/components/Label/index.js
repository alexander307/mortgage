import React, { Component } from 'react';
import './style.sass';
//import './style.css'

class Label extends Component {

  render() {
    return (
      <div className="Label">
        <div className="Label__inner">
          This is Label
        </div>
      </div>
    );
  }
}

export default Label;