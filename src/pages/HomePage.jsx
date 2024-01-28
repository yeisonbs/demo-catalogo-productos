//Pagina principal que incluye el encabezado y el componente de la lista de productos// pages/HomePage.js
import React from 'react';
import { useState } from 'react';
import HeaderMenu from '../components/header/HeaderMenu';
import ProductFilter from '../components/product-list/Product-Filter';
import ProductItem from '../components/product-list/Product-Item';
import ProductModal from '../components/product-list/Product-Modal';
import productsData from '../data/Products.json';
import Footer from '../components/footer/Footer';


const HomePage = () => {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState('All');

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleFilterChange = (filters) => {
    setSelectedBrand(filters.brand);
    // Puedes agregar lógica adicional según sea necesario
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
            <h1>primer bloque</h1>
          </div>
          <div>
            {/* Renderizar ProductItem y otros elementos */}
            {productsData.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                onProductClick={handleProductClick}
                filteredBrand={selectedBrand}
              />
            ))}
            {/* Renderizar ProductModal */}
            <ProductModal product={selectedProduct} onClose={handleCloseModal} />

          </div>
        </div>
      </section>

      <footer >
        <Footer />
      </footer>

    </div>

  );
};

export default HomePage;
