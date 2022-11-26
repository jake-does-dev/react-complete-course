import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';
import { useState } from 'react';

export interface ExpenseItemProps {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

const ExpenseItem = ({ title, amount, date }: ExpenseItemProps) => {
  const [updatedTitle, setUpdatedTitle] = useState(title);

  const clickHandler = () => {
    setUpdatedTitle('Updated!');
  };

  return (
    <Card className={'expense-item'}>
      <ExpenseDate date={date} />
      <div className={'expense-item__description'}>
        <h2>{updatedTitle}</h2>
        <div className={'expense-item__price'}>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
