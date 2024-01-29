// components/ProductFilter.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Select, MenuItem, Slider, FormControl, InputLabel, Grid } from '@mui/material';
import productsData from '../../data/Products.json';
import TextField from '@mui/material/TextField';

const ProductFilter = ({ onFilterChange }) => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState(10000);
  const [reviewRange, setReviewRange] = useState([1, 5]);

  useEffect(() => {
    // Obtener marcas únicas de los productos
    const uniqueBrands = [...new Set(productsData.map((product) => product.brand))];
    setBrands(['All', ...uniqueBrands]);
  }, []);

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    onFilterChange({ brand: event.target.value, minPrice, maxPrice, reviewRange });
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(parseFloat(event.target.value));
    onFilterChange({ brand: selectedBrand, minPrice: parseFloat(event.target.value), maxPrice, reviewRange });
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(parseFloat(event.target.value));
    onFilterChange({ brand: selectedBrand, minPrice, maxPrice: parseFloat(event.target.value), reviewRange });
  };

  const handleReviewChange = (_, newValue) => {
    setReviewRange(newValue);
    onFilterChange({ brand: selectedBrand, maxPrice,minPrice, reviewRange: newValue });
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
        <Grid item xs={12} md={6}>
          <Typography id="min-price" gutterBottom>
            Precio mínimo
          </Typography>
          <TextField
            id="min-price"
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography id="max-price" gutterBottom>
            Precio máximo
          </Typography>
          <TextField
            id="max-price"
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
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
