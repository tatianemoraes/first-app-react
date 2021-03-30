import React from 'react';
import './style.css';

// function Button({ btnName, bgColor }) {
function Button(props) {
  return (
    <button
      className='btn-default'
      type="submit"
      style={{ background:props.bgColor, border:props.border }}>
      {props.btnName}
    </button>
  );
};

export default Button;
