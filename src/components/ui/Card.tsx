import { ReactNode } from 'react';
import './Card.css';

interface CardProps {
  className: string;
  children?: ReactNode;
}

const Card = ({ children, className }: CardProps) => <div className={'card ' + className}>{children}</div>;

export default Card;
