import './Expenses.css';
import { ExpenseItemProps } from './ExpenseItem';
import Card from '../ui/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

export interface ExpensesProp {
  expenses: ExpenseItemProps[];
}

const Expenses = ({ expenses }: ExpensesProp) => {
  const [filteredYear, setFilteredYear] = useState(2021);

  const filterChangeHandler = (year: number) => {
    setFilteredYear(year);
  };

  const filteredExpenses = expenses.filter(
    (e) => e.date.getFullYear() == filteredYear,
  );

  return (
    <Card className={'expenses'}>
      <ExpensesFilter
        selectedYear={filteredYear}
        onYearChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
