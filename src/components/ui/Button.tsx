import React from 'react';

import classes from './Button.module.css';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  children: string;
}

const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button className={classes.button} type={type || 'button'} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
