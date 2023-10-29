import axios from 'axios';

export const getAllUsers = () => {
  console.log('Fetching user data...');
  return axios
    .get('http://localhost:8000/users/getusers')
    .then((res) => {
      console.log('API response:', res.data.data);
      return res.data.data;
    })
    .catch((err) => {
      console.error('API error:', err);
      throw err;
    });
};
