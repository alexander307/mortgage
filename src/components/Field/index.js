import React, { Component } from 'react';
import './style.sass';



class Field extends Component {

  render() {
    let showValue = this.props.value //.toLocaleString()
    
    //this.setValue.bind(this)
    console.log(this.props.setVal, 'this')
    return (
      <div className="Field">
        <input tabIndex = "1" 
              type = "text"
              value = {this.props.value} 
              className = "Field__input" 
              onChange = { (e) => {
                this.props.setVal(e.target.value)
              } } 
              />
      </div>
    );
  }
}

export default Field;