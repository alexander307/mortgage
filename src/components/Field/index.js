import React, { Component } from 'react';
import './style.sass';



const Field = (props) => {
    let showValue = props.divide?parseInt(props.value).toLocaleString():props.value
    return (
      <div className="Field">
        <input tabIndex = "1" 
              type = "text"
              value = {showValue} 
              className = "Field__input" 
              onChange = { (e) => {
                props.setVal({ id : props.id,  
                                value: props.divide?parseInt(e.target.value.replace(/\s+/g,'')):e.target.value
                              })
              } } 
              />
      </div>
    );
}

export default Field;