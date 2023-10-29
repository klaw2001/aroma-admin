import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Stack, Button, Typography, Card, CardContent, TextField } from '@mui/material';
import { getSingleCategory, updateCategory } from 'src/myFunctions/category/CategoryFunctions';

export default function EditCategoryView() {
  const navigate = useNavigate();
  const { categoryID } = useParams();
  const [catData, setCatData] = useState({});
  const [categoryName, setCategoryName] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [existingURL, setExistingURL] = useState('https://example.com/existing-image.jpg');

  const handleCategoryNameChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setExistingURL(imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to send the data
    const formData = new FormData();
    formData.append('name', categoryName);
    if (selectedImage) {
      formData.append('image', selectedImage);
    }

    updateCategory(categoryID, formData)
      .then((res) => {
        console.log(res.success);
        if (res.success === true) {
          navigate('/category');
        }
      })
      .catch((error) => {
        console.error('Error updating category:', error);
      });
  };

  useEffect(() => {
    getSingleCategory(categoryID).then((data) => {
      setCatData(data);
      setCategoryName(data.name);
      setExistingURL(`http://localhost:8000/uploads/category/${data.image}`);
    });
  }, [categoryID]);

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Category</Typography>
        <Button variant="contained" color="success">
          Save
        </Button>
      </Stack>

      <Card>
        <CardContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '30px',
          }}
        >
          <Typography variant="h5">Edit Category</Typography>
          <img src={existingURL} alt="Existing" width={200} />
          <TextField value={categoryName} onChange={handleCategoryNameChange} />
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <Button variant="contained" color="primary" onClick={(e) => handleSubmit(e)}>
            Save Changes
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
