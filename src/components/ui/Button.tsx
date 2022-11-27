import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  type: 'button' | 'reset' | 'submit' | undefined;
  children: string;
}

const Button = ({ children, type }: ButtonProps) => {
  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
