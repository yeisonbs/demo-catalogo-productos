//Pagina principal que incluye el encabezado y el componente de la lista de productos// pages/HomePage.js
import React from 'react';

import HeaderMenu from '../components/header/HeaderMenu';
import ProductFilter from '../components/product-list/Product-Filter';
import ProductItem from '../components/product-list/Product-Item';


const HomePage = () => {

  return (
    <div>
      <HeaderMenu />
      
      <div style={{ display: 'flex' }}>
        {/* Columna izquierda para el ProductFilter */}
        <div style={{ flex: '0 0 30%', paddingRight: '20px' }}>
          <ProductFilter />
         <h1>primer bloque</h1>
        </div>

        {/* Columna derecha para los ProductItem */}
        <div>
      
      <div>
        <ProductItem />
      </div>
     
      

    </div>
      </div>
    </div>
  );
};

export default HomePage;
