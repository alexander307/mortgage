import React from 'react';
import './style.css';


const Switcher = (props) => {
    const checked = props.type ==='differenital'?true:false
    const classNameAnnuity = checked?'':'Switcher__label--acive'
    const classNameDifferenital = checked?' Switcher__label--acive':''
    return (
        <div className="Switcher">
            <label className = "Switcher__switch switch">
              <input 
                type = "checkbox" 
                checked = {checked} 
                className = "Switcher__input" 
                onClick = { (e) => {
                    props.setType({value: e.target.checked?'differenital':'annuity'})
                }}
                />
              <span className = "slider round Switcher__slider"></span>
            </label>
            <div className = "Switcher__label-wrap" >
                <span 
                    className = {"Switcher__label SmallSwitcher__label--annuity " + classNameAnnuity }
                    onClick = { (e) => {
                        props.setType({value: 'annuity'})
                    }}
                    >Аннуительный </span>
                /
                <span 
                className = {"Switcher__label SmallSwitcher__label--differenital " + classNameDifferenital} 
                onClick = { (e) => {
                    props.setType({value: 'differenital'})
                }}
                >Дифференциальный </span>
            </div>
        </div>
    )
}

export default Switcher