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

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
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
            <ProductFilter />
            <h1>primer bloque</h1>
          </div>
          <div>
            {/* Renderizar ProductItem y otros elementos */}
            <ProductItem product={productsData[2]} onProductClick={handleProductClick} />

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
