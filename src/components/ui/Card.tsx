import { ReactNode } from 'react';
import './Card.css';

interface CardProps {
  className: string;
  children?: ReactNode;
}

const Card = (props: CardProps) => (
  <div className={'card ' + props.className}>{props.children}</div>
);

export default Card;
