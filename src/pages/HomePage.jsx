// pages/HomePage.js
import React from 'react';
import { useState } from 'react';
import HeaderMenu from '../components/header/HeaderMenu';
import ProductFilter from '../components/product-list/Product-Filter';
import ProductItem from '../components/product-list/Product-Item';
import ProductModal from '../components/product-list/Product-Modal';
import productsData from '../data/Products.json';
import Footer from '../components/footer/Footer';
import { Grid } from '@mui/material';

const HomePage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [reviews, setReviews] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleFilterChange = (filters) => {
    setSelectedBrand(filters.brand);
    setMinPrice(filters.minPrice);
    setMaxPrice(filters.maxPrice);
    setReviews(parseInt(filters.reviewRange));
  };

  return (
    <div>
      <header>
        <HeaderMenu />
      </header>

      <section>
        <div style={{ display: 'flex' }}>
          {/* Columna izquierda para el ProductFilter */}
          <div style={{ flex: '0 0 30%', paddingRight: '20px' }}>
            <ProductFilter onFilterChange={handleFilterChange} />
          </div>


          <div style={{ flex: '1' }}>
            {/* Renderizar ProductItem y otros elementos */}
            <Grid container spacing={2} sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {productsData.map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  onProductClick={handleProductClick}
                  filteredBrand={selectedBrand}
                  filteredMinPrice={minPrice}
                  filteredMaxPrice={maxPrice}
                  filteredReviews={reviews}
                />
              ))}
            </Grid>
          </div>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
      {/* Renderizar ProductModal */}
      <ProductModal product={selectedProduct} onClose={handleCloseModal} />



    </div>
  );
};

export default HomePage;
