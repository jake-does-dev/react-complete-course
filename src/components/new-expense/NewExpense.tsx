import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { ExpenseItemProps } from '../expenses/ExpenseItem';

interface NewExpenseProps {
  onAddExpense: (expenseData: ExpenseItemProps) => void;
}

const NewExpense = ({ onAddExpense }: NewExpenseProps) => {
  const saveExpenseDataHandler = (expenseData: ExpenseItemProps) => {
    onAddExpense(expenseData);
  };

  return (
    <div className={'new-expense'}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
