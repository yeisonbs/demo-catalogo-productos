// components/ProductDetail.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, Box, Rating, Button } from '@mui/material';

const ProductDetail = ({ product, onCloseCredit }) => {
  if (!product) {
    return null;
  }

  const { brand, name, price, reviews, image, specifications } = product;

  return (
    <Dialog open={true} onClose={onCloseCredit} maxWidth="md">
      <DialogTitle>{brand}</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={image} alt={brand} style={{ width: '100%', maxWidth: '400px', marginBottom: '20px' }} />
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Precio: ${price}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <Rating name="read-only" value={reviews} readOnly />
            <Typography>({reviews} reviews)</Typography>
          </Box>
          <Typography variant="h6" mt={2}>
            Especificaciones:
          </Typography>
          <ul>
            {specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </Box>
      </DialogContent>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <Button variant="contained" color="primary" onClick={onCloseCredit}>
          Cerrar
        </Button>
      </Box>
    </Dialog>
  );
};

export default ProductDetail;

