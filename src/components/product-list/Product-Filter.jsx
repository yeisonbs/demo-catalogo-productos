// components/ProductFilter.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Select, MenuItem, Slider, FormControl, InputLabel, Grid } from '@mui/material';
import productsData from '../../data/Products.json';

const ProductFilter = ({ onFilterChange }) => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [priceRange, setPriceRange] = useState([200, 2000]);
  const [reviewRange, setReviewRange] = useState([1, 5]);

  useEffect(() => {
    // Obtener marcas únicas de los productos
    const uniqueBrands = [...new Set(productsData.map((product) => product.brand))];
    setBrands(['All', ...uniqueBrands]);
  }, []);

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    console.log(event.target.value);
    onFilterChange({ brand: event.target.value, priceRange, reviewRange });
  };

  const handlePriceChange = (_, newValue) => {
    setPriceRange(newValue);
    console.log(newValue);
    onFilterChange({ brand: selectedBrand, priceRange: newValue, reviewRange });
  };

  const handleReviewChange = (_, newValue) => {
    setReviewRange(newValue);
    onFilterChange({ brand: selectedBrand, priceRange, reviewRange: newValue });
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6">Filtros</Typography>

      <FormControl fullWidth sx={{ mt: 1 }}>
        <InputLabel id="brand-select-label">Marca</InputLabel>
        <Select
          labelId="brand-select-label"
          id="brand-select"
          value={selectedBrand}
          label="Marca"
          onChange={handleBrandChange}
        >
          {brands.map((brand) => (
            <MenuItem key={brand} value={brand}>
              {brand}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Typography id="price-range-slider" gutterBottom>
            Precio
          </Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            aria-labelledby="price-range-slider"
            valueLabelFormat={(value) => `$${value}`}
            min={50000}  // Valor mínimo para el rango de precios
            max={2000}  // Valor máximo para el rango de precios
          />
        </Grid>
        <Grid item xs={12}>
          <Typography id="review-range-slider" gutterBottom>
            Reviews
          </Typography>
          <Slider
            value={reviewRange}
            onChange={handleReviewChange}
            valueLabelDisplay="auto"
            aria-labelledby="review-range-slider"
            valueLabelFormat={(value) => value}
            min={1}
            max={5}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductFilter;
