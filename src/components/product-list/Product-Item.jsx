// (Componente individual de un producto en la lista)
// components/ProductItem.js
import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Box, Rating, CardMedia, Grid } from '@mui/material';
import productsData from '../../data/Products.json';

const ProductItem = () => {
  return (
    <Grid container spacing={2} sx={{ marginTop: '50px' }}>
      {productsData.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia component="img" height="140" image={product.image} alt={product.brand} />
            <CardContent>
              <Typography variant="h6">{product.brand}</Typography>
              <Typography variant="body2" color="text.secondary">
                Price: ${product.price}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Rating name="read-only" value={product.reviews} readOnly />
                <Typography>({product.reviews} reviews)</Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Button color= "primary" variant="contained">Lo Quiero</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductItem;
