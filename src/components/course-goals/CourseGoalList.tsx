import React from 'react';

import './CourseGoalList.css';
import CourseGoalItem from './CourseGoalItem';

interface CourseGoalListProps {
  items: { id: string; text: string }[];
  onDeleteItem: (goalId: string) => void;
}

const CourseGoalList = (props: CourseGoalListProps) => {
  return (
    <ul className='goal-list'>
      {props.items.map((goal) => (
        <CourseGoalItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
          <>{goal.text}</>
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
