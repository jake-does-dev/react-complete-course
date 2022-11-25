import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: 0,
    enteredDate: '',
  });

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserInput((prevState) => ({
      ...prevState,
      enteredTitle: event.target.value,
    }));

  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserInput((prevState) => ({
      ...prevState,
      enteredAmount: parseFloat(event.target.value),
    }));

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserInput((prevState) => ({
      ...prevState,
      enteredDate: event.target.value,
    }));

  const submitHandler = (formEvent: React.FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();

    setUserInput({
      enteredTitle: '',
      enteredAmount: 0,
      enteredDate: '',
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={'new-expense__controls'}>
        <div className={'new-expense__control'}>
          <label>Title</label>
          <input
            type={'text'}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={'new-expense__control'}>
          <label>Amount</label>
          <input
            type={'number'}
            min={'0.01'}
            step={'0.01'}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={'new-expense__control'}>
          <label>Date</label>
          <input
            type={'date'}
            min={'2019-01-01'}
            max={'2022-12-31'}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={'new-expense__actions'}>
        <button type={'submit'}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
