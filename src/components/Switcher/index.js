import React, { Component } from 'react';
import './style.css';


class Switcher extends Component {

  render() {
    return (
        <div className="Switcher">
            <label className = "Switcher__switch switch">
              <input type = "checkbox" defaultChecked = "checked" className = "Switcher__input" />
              <span className = "slider round Switcher__slider"></span>
            </label>
            <label className = "Switcher__label">
                <span>Аннуительный </span>
                /
                <span className = "Switcher__label--acive"> дифференциальный </span>
            </label>
        </div>
    )
  }
}

export default Switcher