// (Productos relacionados)
// components/RelatedProducts.js
import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

const RelatedProducts = ({ products, onProductClick }) => {
  return (
    <div>
      <Typography variant="h5" mt={3} mb={2}>
        Productos Relacionados
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid #ccc',
                padding: '10px',
              }}
            >
              <img
                src={product.image}
                alt={product.brand}
                style={{ width: '100%', maxWidth: '200px', marginBottom: '10px' }}
              />
              <Typography variant="subtitle1">{product.name}</Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Precio: ${product.price}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Marca: {product.brand}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Reviews: {product.reviews}
              </Typography>
              <button onClick={() => onProductClick(product)}>Ver Detalles</button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RelatedProducts;
