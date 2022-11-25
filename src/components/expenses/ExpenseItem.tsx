import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';
import { useState } from 'react';

interface ExpenseItemProps {
  initialTitle: string;
  amount: number;
  date: Date;
}

const ExpenseItem = ({ initialTitle, amount, date }: ExpenseItemProps) => {
  const [title, setTitle] = useState(initialTitle);

  const clickHandler = () => {
    setTitle('Updated!');
  };

  return (
    <Card className={'expense-item'}>
      <ExpenseDate date={date} />
      <div className={'expense-item__description'}>
        <h2>{title}</h2>
        <div className={'expense-item__price'}>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
