import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com/';
const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

export const searchGitHubUsers = async (username) => {
  const response = await axios.get(`${GITHUB_API_BASE_URL}search/users`, {
    params: { q: username },
    headers: {
      Authorization: `token ${API_KEY}`
    }
  });
  return response.data;
};
