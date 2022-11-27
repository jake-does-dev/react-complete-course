import classes from './UsersList.module.css';
import Card from '../ui/Card';
import { UserProps } from './AddUser';

interface UsersListProps {
  users: UserProps[];
}

const UsersList = (props: UsersListProps) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
