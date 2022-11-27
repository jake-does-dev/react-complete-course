import { ReactNode } from 'react';
import './Card.css';

interface CardProps {
  className?: string;
  children?: ReactNode;
}

const Card = (props: CardProps) => {
  const { children, className } = props;
  return <div className={'card ' + className}>{children}</div>;
};

export default Card;
