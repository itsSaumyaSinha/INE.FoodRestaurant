import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export const Button = ({ children, buttonStyle, linkTo }) => {
  return (
    <Link to={linkTo} className='btn-mobile'>
      <button className={`btn ${buttonStyle}`}>
        {children}
      </button>
    </Link>
  );
};