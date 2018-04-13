import React, { Component } from 'react'
//import './style.sass'
import './style.css'

const Slider = (props) => {
   
    return (
      <div className="Slider">
          <input  type="range"
                  min="0" 
                  max="5000000" 
                  step="100000" 
                  value= {props.value}
                  onChange = { (e) => {
                    props.setVal(e.target.value)
                  } }
                  className = "Slider__input" />
      </div>
    );
}

export default Slider