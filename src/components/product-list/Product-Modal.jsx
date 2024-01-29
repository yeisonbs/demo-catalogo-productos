// components/ProductModal.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, Box, Rating, Button } from '@mui/material';
/* import ProductDetail from '../product-detail/ProductDetail';
import RelatedProducts from '../product-detail/RelatedProducts';
import CreditRequest from '../product-detail/CreditRequest'; */

const ProductModal = ({ product, onClose,/*  onCreditRequest */ }) => {
  if (!product) {
    return null;
  }

  const { brand, name, price, reviews, image, /* specifications, relatedProducts */ } = product;

  return (
    <Dialog open={true} onClose={onClose} maxWidth="md">
      <DialogTitle>{brand}</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={image} alt={brand} style={{ width: '60%', maxWidth: '80%', marginBottom: '20px' }} />
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Precio: ${price}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <Rating name="read-only" value={reviews} readOnly />
            <Typography>({reviews} reviews)</Typography>
          </Box>
          {/* <ProductDetail specifications={specifications} />
          <RelatedProducts products={relatedProducts} />
          <CreditRequest onCreditRequest={onCreditRequest} /> */}
        </Box>
      </DialogContent>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <Button marginTop="20px" variant="contained" color="primary" onClick={onClose}>
          Credito
        </Button>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <label marginTop="20px" variant="contained" color="primary" onClick={onClose}>
          Comprar a contado
        </label>
      </Box>

    </Dialog>
  );
};

export default ProductModal;
