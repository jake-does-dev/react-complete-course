import './Button.css';
import React from 'react';

interface ButtonProps {
  type: 'button' | 'reset' | 'submit' | undefined;
  children: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button type={props.type} className='button' onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
