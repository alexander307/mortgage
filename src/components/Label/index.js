import React, { Component } from 'react';
import './style.sass';

class Label extends Component {
  render() {
    return (
      <div className="Label">
        <div className="Label__inner">
          {this.props.label}
        </div>
      </div>
    );
  }
}

export default Label;