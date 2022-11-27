import React, { ChangeEvent, FormEvent, useState } from 'react';

import Button from '../ui/Button';
import styled from 'styled-components';

interface CourseInputProps {
  onAddGoal(enteredValue: string): void;
}

interface FormProps {
  readonly isValid: boolean;
}

const FormControl = styled.div<FormProps>`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ isValid }) => (isValid ? 'black' : 'red')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${({ isValid }) => (isValid ? '#ccc' : 'red')};
    background: 1px solid ${({ isValid }) => (isValid ? 'transparent' : '#ffd7d7')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    border-color: red;
    background: #ffd7d7;
  }

  &.invalid label {
    border-color: ${(props) => (props.isValid ? 'black' : 'red')};
  }
`;

const CourseInput = ({ onAddGoal }: CourseInputProps) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl isValid={isValid}>
        <label>Course Goal</label>
        <input type='text' onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
