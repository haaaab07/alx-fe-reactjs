import React from 'react';

function UserList({ users }) {
  return (
    <div>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <img src={user.avatar_url} alt={`${user.login}'s avatar`} width={50} />
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                {user.login}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
