import React from 'react';
import './style.css';


const SmallSwitcher = (props) => {

    const {id, termUnit} = props
    const checked = termUnit === 'month'?false:'checked'
    const classNameMonth = checked?'':'SmallSwitcher__label--acive'
    const classNameYear = checked?' SmallSwitcher__label--acive':''

    return (
        <div className="SmallSwitcher">
            <label className = "SmallSwitcher__switch switch">
              <input type = "checkbox" 
                    checked = {checked} 
                    onChange = {(e) => {
                        props.switchTermUnit({
                            id: props.id,
                            value: e.target.checked?'year':'month'
                        })
                    }}
                    className = "SmallSwitcher__input" 
                    />
              <span className = "slider round SmallSwitcher__slider"></span>
            </label>
            <label >
                <span className = {'SmallSwitcher__label SmallSwitcher__label--month ' + classNameMonth} 
                    onClick = {(e) => {
                        props.switchTermUnit({
                            id: props.id,
                            value: 'month'
                        })
                        
                    } }
                >Mec </span>
                /
                <span className = {'SmallSwitcher__label SmallSwitcher__label--year ' + classNameYear}
                    onClick = {(e) => {
                        props.switchTermUnit({
                            id: props.id,
                            value: 'year'
                        })
                        
                    }}
                > Год </span>
            </label>
        </div>
    )
}

export default SmallSwitcher