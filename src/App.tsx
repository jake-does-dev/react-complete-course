import './index.css';
import { useState } from 'react';

import AddUser, { UserProps } from './components/users/AddUser';
import UsersList from './components/users/UsersList';

function App() {
  const [usersList, setUsersList] = useState<UserProps[]>([]);

  const addUserHandler = (user: UserProps) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { ...user }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
