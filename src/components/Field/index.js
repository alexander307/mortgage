import React, { Component } from 'react';
import './style.sass';



class Field extends Component {

  render() {
    console.log(this.props, 'FieldProps')
    return (
      <div className="Field">
        <input tabIndex = "1" 
              type = "text" placeholder = "1 000 000" 
              className = "Field__input" />
      </div>
    );
  }
}

export default Field;