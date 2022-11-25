import './Expenses.css';
import ExpenseItem from './ExpenseItem';

type ExpensesProp = {
  expenses: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }[];
};

function Expenses(props: ExpensesProp) {
  return (
    <div className={'expenses'}>
      {props.expenses.map((e) => (
        <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
        />
      ))}
    </div>
  );
}

export default Expenses;
