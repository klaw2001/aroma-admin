import axios from 'axios';

export const getCategories = () => {
  console.log('Fetching user data...');
  return axios
    .get('http://localhost:8000/category/get-categories')
    .then((res) => {
      console.log('API response:', res.data.data);
      return res.data.data;
    })
    .catch((err) => {
      console.error('API error:', err);
      throw err;
    });
};

export const deleteCategory = (categoryID) => {
  console.log('Deleting...');
  return axios
    .delete(`http://localhost:8000/category/delete-category/${categoryID}`)
    .then((res) => {
      console.log('API response:', res.data.data);
      return res.data.data;
    })
    .catch((err) => {
      console.error('API error:', err);
      throw err;
    });
};
export const getSingleCategory = (categoryID) => {
  console.log('Editing...');
  return axios
    .get(`http://localhost:8000/category/get-category/${categoryID}`)
    .then((res) => {
      console.log('API response:', res.data.data);
      return res.data.data;
    })
    .catch((err) => {
      console.error('API error:', err);
      throw err;
    });
};
export const updateCategory = (categoryID, formData) => {
  console.log('Updating...');
  return axios
    .put(`http://localhost:8000/category/update-category/${categoryID}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set the content type for formData
      },
    })
    .then((res) => {
      console.log('API response:', res.data);
      return res.data;
    })
    .catch((err) => {
      console.error('API error:', err);
      throw err;
    });
};

