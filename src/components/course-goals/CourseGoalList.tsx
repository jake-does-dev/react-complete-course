import React from 'react';

import './CourseGoalList.css';
import CourseGoalItem from './CourseGoalItem';

interface CourseGoalListProps {
  items: { id: string; text: string }[];
  onDeleteItem: (goalId: string) => void;
}

const CourseGoalList = ({ items, onDeleteItem }: CourseGoalListProps) => {
  return (
    <ul className='goal-list'>
      {items.map((goal) => (
        <CourseGoalItem key={goal.id} id={goal.id} onDelete={onDeleteItem}>
          <>{goal.text}</>
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
