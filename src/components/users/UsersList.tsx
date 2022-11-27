import userListStyles from './UsersList.module.css';
import Card from '../ui/Card';
import User, { UserProps } from './User';
import { useState } from 'react';
import AddUser from './AddUser';
import ErrorModal from '../ui/ErrorModal';

const UsersList = () => {
  const [users, setUsers] = useState<UserProps[]>([{ name: 'Jake', age: 27 }]);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const addUserHandler = (user: UserProps) => {
    if (user.name === '') {
      setShowErrorModal(true);
      return;
    }

    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  const dismissModalHandler = () => {
    console.log('hello from dismiss handler!');
    setShowErrorModal(false);
  };

  if (showErrorModal) {
    return (
      <ErrorModal
        title={'Invalid user'}
        message={'Please enter a valid name (non-empty) and a valid age (non negative)!'}
        onDismiss={dismissModalHandler}
      />
    );
  } else {
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
  }
};

export default UsersList;
