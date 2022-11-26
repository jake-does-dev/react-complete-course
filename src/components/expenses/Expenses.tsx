import './Expenses.css';
import ExpenseItem, { ExpenseItemProps } from './ExpenseItem';
import Card from '../ui/Card';

interface ExpensesProp {
  items: ExpenseItemProps[];
}

const Expenses = ({ items }: ExpensesProp) => (
  <Card className={'expenses'}>
    {items.map((e) => (
      <ExpenseItem
        key={e.id}
        id={e.id}
        title={e.title}
        amount={e.amount}
        date={e.date}
      />
    ))}
  </Card>
);

export default Expenses;
