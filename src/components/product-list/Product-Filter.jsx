// components/ProductFilter.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Select, MenuItem, Slider, FormControl, InputLabel, Grid } from '@mui/material';
import productsData from '../../data/Products.json';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';

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
    onFilterChange({ brand: selectedBrand, maxPrice, minPrice, reviewRange: newValue });
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

        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography id="review-range-slider" sx={{ marginRight: '10px' }}>
            Reviews
          </Typography>
          <Rating
            name="review-range"
            value={reviewRange[1]}
            precision={1}
            onChange={(_, newValue) => handleReviewChange(_, [1, newValue])}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductFilter;
