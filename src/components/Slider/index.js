import React, { Component } from 'react'
//import './style.sass'
import './style.css'

const Slider = (props) => {
    
    return (
      <div className="Slider">
          <input  type="range"
                  min= {props.min} 
                  max= {props.max} 
                  step= {props.step}
                  value= {props.value}
                  onChange = { (e) => {
                    props.setVal({id: props.id, value: e.target.value})
                  } }
                  className = "Slider__input" />
          <div className = "Slider__label-container" >
            <div className="Slider__min-label Slider__label">{parseInt(props.min).toLocaleString()}</div>
            <div className="Slider__max-label Slider__label">{parseInt(props.max).toLocaleString()}</div>
          </div>

      </div>
    );
}

export default Slider