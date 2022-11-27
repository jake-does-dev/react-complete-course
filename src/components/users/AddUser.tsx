import React, { useState } from 'react';

import Button from '../ui/Button.js';
import ErrorModal from '../ui/ErrorModal.js';
import classes from './AddUser.module.css';
import Card from '../ui/Card';

export interface UserProps {
  id: string;
  name: string;
  age: string;
}

interface AddUserProps {
  onAddUser(user: UserProps): void;
}

interface ErrorProps {
  title: string;
  message: string;
}

const AddUser = (props: AddUserProps) => {
  const NO_ERROR_MESSAGE = { title: '', message: '' };

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<ErrorProps>(NO_ERROR_MESSAGE);

  const addUserHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrorMessage({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      setError(true);
      return;
    }
    if (+enteredAge < 1) {
      setErrorMessage({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      setError(true);
      return;
    }
    props.onAddUser({ id: crypto.randomUUID(), name: enteredUsername, age: enteredAge });
    setEnteredUsername('');
    setEnteredAge('');
    setError(false);
  };

  const usernameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setErrorMessage(NO_ERROR_MESSAGE);
    setError(false);
  };

  return (
    <div>
      {error && <ErrorModal title={errorMessage.title} message={errorMessage.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler} />
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
