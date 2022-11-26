import { ReactElement } from 'react';

import './CourseGoalItem.css';

interface CourseGoalItemProps {
  children: ReactElement;
  id: string;
  onDelete(id: string): void;
}

const CourseGoalItem = (props: CourseGoalItemProps) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className='goal-item' onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
