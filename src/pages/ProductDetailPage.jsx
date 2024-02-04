// pagina detalle de producto
// pages/ProductDetailPage.js
import React from 'react';
import HeaderMenu from '../components/header/HeaderMenu';
import ProductModal from '../components/product-list/Product-Modal';
/* import productsData from '../data/Products.json'; */
import Footer from '../components/footer/Footer';

const ProductDetailPage = (/* { match } */) => {
 /*  const productId = parseInt(match.params.id);
  const selectedProduct = productsData.find((product) => product.id === productId); */

  return (
    <div>
      <header>
        <HeaderMenu />
      </header>

      <section>
        {/* Renderizar ProductModal */}
        <ProductModal/*  product={selectedProduct} */ onClose={() => window.history.back()} />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProductDetailPage;
