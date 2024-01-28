// components/ProductModal.js
import React from 'react';
import {
  Modal,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
} from '@mui/material';

const ProductModal = ({ open, handleClose, product }) => {
  if (!product) {
    return null; // Otra opción es mostrar un mensaje indicando que no hay producto seleccionado.
  }

  const { brand, name, price, reviews, image, info } = product;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="product-modal-title"
      aria-describedby="product-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Card>
          <CardMedia component="img" height="140" image={image} alt={brand} />
          <CardContent>
            <Typography variant="h5" component="div">
              {brand} {name}
            </Typography>
            <Typography variant="h6">${price}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Rating name="read-only" value={reviews} readOnly />
              <Typography>({reviews} reviews)</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {info.display}
              <br />
              {info.processor}
              <br />
              {info.storage}
              <br />
              {info.camera}
              <br />
              {info.battery}
            </Typography>
          </CardContent>
          <Button onClick={handleClose}>Cerrar</Button>
        </Card>
      </Box>
    </Modal>
  );
};

export default ProductModal;
