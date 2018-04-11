import React, { Component } from 'react';
import './style.sass';



const Field = (props) => {


    let showValue = props.value //.toLocaleString()
    
    console.log(props.setVal, 'this')
    return (
      <div className="Field">
        <input tabIndex = "1" 
              type = "text"
              value = {props.value} 
              className = "Field__input" 
              onChange = { (e) => {
                props.setVal(e.target.value)
              } } 
              />
      </div>
    );
}

export default Field;