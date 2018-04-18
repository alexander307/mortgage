import React, { Component } from 'react';
import './style.sass';



const Field = (props) => {
    let showValue = parseInt(props.value).toLocaleString()
    return (
      <div className="Field">
      {/* {typeof props.value} {showValue} {typeof showValue} */}
        <input tabIndex = "1" 
              type = "text"
              value = {showValue} 
              className = "Field__input" 
              onChange = { (e) => {
                props.setVal({ id : props.id,  
                                value: parseInt(e.target.value.replace(/\s+/g,''))
                              })
              } } 
              />
      </div>
    );
}

export default Field;