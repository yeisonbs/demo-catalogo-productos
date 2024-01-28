// (Componente individual de un producto en la lista)
// components/ProductItem.js
import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Box, Rating, CardMedia, Grid } from '@mui/material';
import productsData from '../../data/Products.json';



const ProductItem = ({ product, onProductClick, filteredBrand,filteredPriceRange }) => {
  const handleButtonClick = () => {
    onProductClick(product);
  };

  // Verificar si el producto debe mostrarse según la marca filtrada
  if (filteredBrand !== 'All' && product.brand !== filteredBrand) {
    console.log(filteredBrand, product.brand, 'no coincide');
    return null; // No renderizar el componente si la marca no coincide
  }

   // Verificar si el producto debe mostrarse según el rango de precios filtrado
 /*   if (
    (filteredPriceRange[0] !== 200 && product.price < filteredPriceRange[0]) ||
    (filteredPriceRange[1] !== 2000 && product.price > filteredPriceRange[1])
  ) {
    console.log(filteredPriceRange, product.price, 'no coincide');
    return null; // No renderizar el componente si el precio no está en el rango
  } */

  return (
    <Grid container spacing={2} sx={{ marginTop: '50px' }}>
    {productsData
      .filter((product) => filteredBrand === 'All' || product.brand === filteredBrand || product.price === filteredPriceRange)
      .map((product) => (
        <Grid item key={product.id}  container spacing={2} xs={12} sm={6} md={4} >
          <Card container xs={12} sm={6} md={4}>
            <CardMedia container xs={12} sm={6} md={4} component="img" height="140" image={product.image} alt={product.brand} />
            <CardContent container xs={12} sm={6} md={4}>
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
              <Button id={`product-${product.id}`} variant="contained" color="primary" onClick={() => handleButtonClick(product)}>
                Lo quiero
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
  </Grid>
  );
};

export default ProductItem;
