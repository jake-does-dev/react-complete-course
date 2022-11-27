import userListStyles from './UsersList.module.css';
import Card from '../ui/Card';
import User, { UserProps } from './User';

interface UsersListProps {
  users: UserProps[];
}

const UsersList = ({ users }: UsersListProps) => {
  return (
    <>
      <Card className={userListStyles}>
        {users.map((u) => (
          <User key={crypto.randomUUID()} name={u.name} age={u.age} />
        ))}
      </Card>
    </>
  );
};

export default UsersList;
