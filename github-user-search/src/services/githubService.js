import axios from 'axios';

// Function to fetch user data from GitHub API
export const fetchUserData = async (query) => {
  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data;
};

// Function to construct the search query based on advanced criteria
export const constructSearchQuery = (username, location, minRepos) => {
  let query = username;
  if (location) {
    query += `+location:${location}`;
  }
  if (minRepos) {
    query += `+repos:>${minRepos}`;
  }
  return query;
};
