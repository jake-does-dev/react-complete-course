import Expenses from './components/expenses/Expenses';
import NewExpense from './components/new-expense/NewExpense';
import { useState } from 'react';
import { ExpenseItemProps } from './components/expenses/ExpenseItem';

const AppExpenseTracker = () => {
  const [expenses, setExpenses] = useState<ExpenseItemProps[]>([
    {
      id: 'c5326f41-75b3-46aa-ab6a-e50484bfe1a8',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: '0f40ee40-8131-47c7-a850-41d76808bbbd',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'fb2af136-a62b-47fd-8845-2f36b5569fce',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: '647130bd-c3e7-4b44-b2e8-a69ac9c1f43c',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const addExpenseHandler = (expenseData: ExpenseItemProps) => {
    setExpenses((prevExpenses) => [expenseData, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default AppExpenseTracker;
