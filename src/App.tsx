import './App.css';
import AddUser from './components/users/AddUser';
import UsersList from './components/users/UsersList';
import { useState } from 'react';
import { UserProps } from './components/users/User';

const App = () => {
  const [users, setUsers] = useState<UserProps[]>([{ name: 'Jake', age: 27 }]);

  const addUserHandler = (user: UserProps) => {
    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  return (
    <div className='App'>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
};

export default App;
