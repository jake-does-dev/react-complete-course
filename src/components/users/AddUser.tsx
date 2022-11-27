import addUserStyles from './AddUser.module.css';
import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import User from './User';

const AddUser = () => {
  const [userInput, setUserInput] = useState<User>({
    name: '',
    age: 0,
  });

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserInput((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));

  const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserInput((prevState) => ({
      ...prevState,
      age: parseInt(event.target.value),
    }));

  return (
    <Card className={addUserStyles}>
      <form>
        <label>
          <h3>Username</h3>
        </label>
        <input name={'username'} value={userInput.name} type={'text'} onChange={nameChangeHandler} />

        <label>
          <h3>Age (Years)</h3>
        </label>
        <input name={'age'} value={userInput.age} min={0} step={1} type={'number'} onChange={ageChangeHandler} />
        <Button text={'Add User'}></Button>
      </form>
    </Card>
  );
};

export default AddUser;
