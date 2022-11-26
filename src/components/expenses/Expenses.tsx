import './Expenses.css';
import ExpenseItem, { ExpenseItemProps } from './ExpenseItem';
import Card from '../ui/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

interface ExpensesProp {
  items: ExpenseItemProps[];
}

const Expenses = ({ items }: ExpensesProp) => {
  const [filteredYear, setFilteredYear] = useState(2021);

  const filterChangeHandler = (year: number) => {
    setFilteredYear(year);
  };

  return (
    <Card className={'expenses'}>
      <ExpensesFilter selectedYear={filteredYear} onYearChange={filterChangeHandler} />
      {items.map((e) => (
        <ExpenseItem {...e} key={e.id} />
      ))}
    </Card>
  );
};

export default Expenses;
