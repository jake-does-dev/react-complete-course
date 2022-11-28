import React from 'react';

import classes from './Card.module.css';

interface CardProps {
  className: string;
  children: React.ReactElement;
}
const Card = (props: CardProps) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
