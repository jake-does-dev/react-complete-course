import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card';

interface ExpensesProp {
  items: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }[];
}

const Expenses = (props: ExpensesProp) => (
  <Card className={'expenses'}>
    {props.items.map((e) => (
      <ExpenseItem
        key={e.id}
        initialTitle={e.title}
        amount={e.amount}
        date={e.date}
      />
    ))}
  </Card>
);

export default Expenses;
