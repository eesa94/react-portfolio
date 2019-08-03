import React from 'react';
import './CustomButton.css';

const CustomButton = ({ linkTo, size, text }) => (
  <a href={linkTo} target='_blank' rel='noopener noreferrer'>
    <button className={`btn montserrat-7 customButton button${size}`}>
      {text}
    </button>
  </a>
);

export default CustomButton;
