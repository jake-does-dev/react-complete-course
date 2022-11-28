import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { ExpenseItemProps } from '../expenses/ExpenseItem';
import React, { useState } from 'react';

interface NewExpenseProps {
  onAddExpense: (expenseData: ExpenseItemProps) => void;
}

const NewExpense = ({ onAddExpense }: NewExpenseProps) => {
  const [showNewExpenseForm, setShowNewExpenseForm] = useState(false);

  const saveExpenseDataHandler = (expenseData: ExpenseItemProps) => {
    onAddExpense(expenseData);
  };

  const openNewExpenseFormHandler = () => {
    setShowNewExpenseForm(true);
  };

  const closeNewExpenseFormHandler = () => {
    setShowNewExpenseForm(false);
  };

  return (
    <div className={'new-expense'}>
      {!showNewExpenseForm && (
        <button onClick={openNewExpenseFormHandler}>Add New Expense</button>
      )}
      {showNewExpenseForm && (
        <ExpenseForm
          onCancel={closeNewExpenseFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
