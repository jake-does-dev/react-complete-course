import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';
import { ExpensesProp } from './Expenses';

const ExpensesList = ({ expenses }: ExpensesProp) => {
  if (expenses.length === 0) {
    return <h2 className={'expenses-list__fallback'}>No expenses found.</h2>;
  }

  return (
    <ul className={'expenses-list'}>
      {expenses.map((e) => (
        <ExpenseItem {...e} key={e.id} />
      ))}
    </ul>
  );
};

export default ExpensesList;
