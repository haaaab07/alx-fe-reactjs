import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import { searchGitHubUsers } from './services/githubService';

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = (username) => {
    searchGitHubUsers(username).then((data) => {
      setUsers(data.items); // `data.items` holds the search results
    }).catch((error) => {
      console.error('Error fetching users:', error);
    });
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <UserList users={users} />
    </div>
  );
}

export default App;
