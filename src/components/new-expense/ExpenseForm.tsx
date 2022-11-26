import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = () => {
  const initialInputState = {
    title: '',
    amount: '',
    date: '',
  };

  const [userInput, setUserInput] = useState(initialInputState);

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserInput((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));

  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserInput((prevState) => ({
      ...prevState,
      amount: event.target.value,
    }));

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserInput((prevState) => ({
      ...prevState,
      date: event.target.value,
    }));

  const submitHandler = (formEvent: React.FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();

    console.log(userInput);

    setUserInput(initialInputState);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={'new-expense__controls'}>
        <div className={'new-expense__control'}>
          <label>Title</label>
          <input
            type={'text'}
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={'new-expense__control'}>
          <label>Amount</label>
          <input
            type={'number'}
            value={userInput.amount}
            min={'0.01'}
            step={'0.01'}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={'new-expense__control'}>
          <label>Date</label>
          <input
            type={'date'}
            value={userInput.date}
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
