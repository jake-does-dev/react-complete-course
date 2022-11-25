import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

type ExpenseItemProps = {
  title: string;
  amount: number;
  date: Date;
};

function ExpenseItem(props: ExpenseItemProps) {
  return (
    <div className={'expense-item'}>
      <ExpenseDate date={props.date} />
      <div className={'expense-item__description'}>
        <h2>{props.title}</h2>
        <div className={'expense-item__price'}>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
