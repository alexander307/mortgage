import React from 'react';
import './style.sass';

const CalculateButton = (props) => {
    let {calc} = props
    const buttonClass = calc ==='calc'?'calculateButton--calc':'calculateButton--reset'
    const buttonName = calc ==='calc'?'Рассчитать':'Сбосить'

    return (
      <div style = {{"paddingTop": "30px"}}>
        <button 
          className = { 'calculateButton ' + buttonClass } 
          onClick = { () => {
            console.log(calc, 'calc');
            props.calculate({value: calc==='calc'?'reset':'calc'});
          }}> 
          {buttonName}
          </button>
      </div>
    );
}

export default CalculateButton