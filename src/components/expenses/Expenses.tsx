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

  const filteredItems = items.filter((e) => e.date.getFullYear() == filteredYear);

  return (
    <Card className={'expenses'}>
      <ExpensesFilter selectedYear={filteredYear} onYearChange={filterChangeHandler} />
      {filteredItems.map((e) => (
        <ExpenseItem {...e} key={e.id} />
      ))}
    </Card>
  );
};

export default Expenses;
