import { ReactElement } from 'react';

import './CourseGoalItem.css';

interface CourseGoalItemProps {
  children: ReactElement;
  id: string;
  onDelete(id: string): void;
}

const CourseGoalItem = ({ children, id, onDelete }: CourseGoalItemProps) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  };

  return (
    <li className='goal-item' onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseGoalItem;
