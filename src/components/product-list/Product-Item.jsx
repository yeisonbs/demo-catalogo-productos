// (Componente individual de un producto en la lista)
import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Box, Rating, CardMedia, Grid } from '@mui/material';


const ProductItem = ({ product, onProductClick, filteredBrand, filteredMinPrice, filteredMaxPrice, filteredReviews }) => {

  const handleButtonClick = () => {
    console.log('Producto seleccionado:', product, 'filtrado por:', filteredReviews);
    onProductClick(product);
  };

  // Verificar si el producto debe mostrarse según la marca filtrada
  if (filteredBrand !== 'All' && product.brand !== filteredBrand) {
    console.log(filteredBrand, product.brand, 'no coincide');
    return null; // No renderizar el componente si la marca no coincide
  }

  // Verificar si el producto debe mostrarse según el rango de precios filtrado
  const productPrice = parseFloat(product.price);
  const minPrice = parseFloat(filteredMinPrice);
  const maxPrice = parseFloat(filteredMaxPrice);
  const reviews = parseInt(filteredReviews);
  console.log('Precio del producto:', productPrice, 'Reviews:', reviews);

  if (
    (!isNaN(minPrice) && productPrice <= minPrice) ||
    (!isNaN(maxPrice) && productPrice >= maxPrice)
  ) {
    return null; // No renderizar el componente si el precio no está en el rango
  }


  if (!isNaN(reviews) && (product.reviews < reviews || product.reviews > reviews)) {
    console.log('No renderizar el producto:', product.reviews, reviews);
    return null; // No renderizar el componente si las revisiones no están en el rango
  }


  return (
    <Grid item xs={12} sm={6} md={4}>
      <Grid marginBlock={'20px'} alignItems={'center'}>
        <Card >
          <CardMedia component="img" height="240" image={product.image} alt={product.brand} />
          <CardContent>
            <Typography variant="h6">{product.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${product.price}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Rating name="read-only" value={product.reviews} readOnly />

            </Box>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" onClick={handleButtonClick}>
              Lo quiero
            </Button>
          </CardActions>
        </Card>
      </Grid>
      {/* ))} */}
    </Grid>
  );
};

export default ProductItem;
