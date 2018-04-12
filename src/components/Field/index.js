import React, { Component } from 'react';
import './style.sass';



const Field = (props) => {
    let showValue = props.value.toLocaleString()
    
    return (
      <div className="Field">
      {showValue}
        <input tabIndex = "1" 
              type = "text"
              value = {showValue} 
              className = "Field__input" 
              onChange = { (e) => {
                props.setVal(parseInt(e.target.value.replace(/\s+/g,'')))
              } } 
              />
      </div>
    );
}

export default Field;