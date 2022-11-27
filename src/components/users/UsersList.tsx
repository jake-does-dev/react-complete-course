import userListStyles from './UsersList.module.css';
import Card from '../ui/Card';
import User, { UserProps } from './User';
import { useState } from 'react';
import AddUser from './AddUser';

const UsersList = () => {
  const [users, setUsers] = useState<UserProps[]>([{ name: 'Jake', age: 27 }]);

  const addUserHandler = (user: UserProps) => {
    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <Card className={userListStyles}>
        {users.map((u) => (
          <User key={crypto.randomUUID()} name={u.name} age={u.age} />
        ))}
      </Card>
    </>
  );
};

export default UsersList;
