import React from 'react';
import { useSelector } from 'react-redux';
import useActions from '../hooks/useActions';

const User = () => {
  const { isLoading, error, users } = useSelector((state) => state.user);
  //   console.log(state);

  const { getUserById } = useActions();

  return (
    <div>
      <button onClick={() => getUserById(1)}>Get Users</button>
      {isLoading ? (
        <div>LOADING...</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : users?.name ? (
        <h1>Users: {users.name}</h1>
      ) : (
        <div>USER NOT FOUND...</div>
      )}
    </div>
  );
};

export default User;
