import addUserStyles from './AddUser.module.css';
import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { UserProps } from './User';
import ErrorModal from '../ui/ErrorModal';

interface AddUserProps {
  onAddUser: (userInput: UserProps) => void;
}

const AddUser = (props: AddUserProps) => {
  const [userInput, setUserInput] = useState<UserProps>({
    name: '',
    age: 0,
  });
  const [showErrorModal, setShowErrorModal] = useState(false);

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

  const submitUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    function isInvalidUser({ age, name }: UserProps) {
      return name === '' || age < 0;
    }

    if (isInvalidUser(userInput)) {
      setShowErrorModal(true);
    } else {
      props.onAddUser(userInput);
    }
  };

  const dismissModalHandler = () => {
    setShowErrorModal(false);
  };

  return (
    <>
      {showErrorModal && (
        <ErrorModal
          title={'Invalid user'}
          message={
            'Please enter a valid name (non-empty) and a valid age (non negative)!'
          }
          onDismiss={dismissModalHandler}
        />
      )}
      <Card className={addUserStyles}>
        <form onSubmit={submitUserHandler}>
          <label>
            <h3>Username</h3>
          </label>
          <input
            name={'username'}
            value={userInput.name}
            type={'text'}
            onChange={nameChangeHandler}
          />

          <label>
            <h3>Age (Years)</h3>
          </label>
          <input
            name={'age'}
            value={userInput.age}
            min={0}
            step={1}
            type={'number'}
            onChange={ageChangeHandler}
          />
          <Button text={'Add User'}></Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
