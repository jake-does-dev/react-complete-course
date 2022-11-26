import { ChangeEvent, FormEvent, useState } from 'react';

import './CourseInput.css';
import Button from '../ui/Button';

interface CourseInputProps {
  onAddGoal(enteredValue: string): void;
}

const CourseInput = (props: CourseInputProps) => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label>Course Goal</label>
        <input type='text' onChange={goalInputChangeHandler} />
      </div>
      <Button type='submit' onClick={() => console.log('hi')}>
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
