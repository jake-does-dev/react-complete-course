import './Expenses.css';
import { ExpenseItemProps } from './ExpenseItem';
import Card from '../ui/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

export interface ExpensesProp {
  expenses: ExpenseItemProps[];
}

const Expenses = ({ expenses }: ExpensesProp) => {
  const [filteredYear, setFilteredYear] = useState(2021);

  const filterChangeHandler = (year: number) => {
    setFilteredYear(year);
  };

  const filteredItems = expenses.filter((e) => e.date.getFullYear() == filteredYear);

  return (
    <Card className={'expenses'}>
      <ExpensesFilter selectedYear={filteredYear} onYearChange={filterChangeHandler} />
      <ExpensesList expenses={filteredItems} />
    </Card>
  );
};

export default Expenses;
