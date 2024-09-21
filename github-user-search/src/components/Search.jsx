import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'location') setLocation(value);
    if (name === 'minRepos') setMinRepos(value);
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Construct the search query
    const query = `${username}${location ? `+location:${location}` : ''}${minRepos ? `+repos:>${minRepos}` : ''}`;

    // Fetch user data from GitHub API
    fetchUserData(query)
      .then((data) => {
        setLoading(false);
        setUserData(data.items); // Assuming GitHub returns an array in `items`
      })
      .catch(() => {
        setLoading(false);
        setError("Looks like we can't find any users");
      });
  };

  return (
    <div className="p-4">
      <form className="mb-4" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
          className="border p-2 rounded mr-2"
        />
        <input
          type="text"
          name="location"
          value={location}
          onChange={handleInputChange}
          placeholder="Enter location"
          className="border p-2 rounded mr-2"
        />
        <input
          type="number"
          name="minRepos"
          value={minRepos}
          onChange={handleInputChange}
          placeholder="Minimum repositories"
          className="border p-2 rounded mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div>
        {userData.map((user) => (
          <div key={user.id} className="border p-4 mb-2 rounded">
            <img src={user.avatar_url} alt={user.login} width={50} />
            <h2>{user.login}</h2>
            <p>Location: {user.location || 'N/A'}</p>
            <p>Repositories: {user.public_repos || 0}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
