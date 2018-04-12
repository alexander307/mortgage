import React, { Component } from 'react';
import './style.sass';



const Field = (props) => {
  
    return (
      <div className="Field">
        <input tabIndex = "1" 
              type = "text"
              value = {props.value.toLocaleString()} 
              className = "Field__input" 
              onChange = { (e) => {
                props.setVal(parseInt(e.target.value.replace(/\s+/g,'')))
              } } 
              />
      </div>
    );
}

export default Field;