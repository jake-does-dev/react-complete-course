import './Button.css';
import React from 'react';

interface ButtonProps {
  type: 'button' | 'reset' | 'submit' | undefined;
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button type={type} className='button' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
