import React, { Component } from 'react';
import './style.sass';

const Label = (props) => {
    return (
      <div className="Label">
        <div className="Label__inner">
          {props.label}
        </div>
      </div>
    );
}

export default Label;