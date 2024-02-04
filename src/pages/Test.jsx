//(Menu del encabezado)
// components/HeaderMenu.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import CategoriesMenu from '../components/header/CategoriesMenu';

const Test = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <div>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                Macropay
              </Typography>
            </div>
          </Box>

          <div>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button color= "primary" variant="contained" style={{ backgroundColor: '#4CAF50', color: 'white' }} >Crear cuenta</Button>
              <Button color="inherit">Iniciar sesión</Button>
              <IconButton color="inherit" aria-label="Shopping Cart">
                <ShoppingCartIcon />
              </IconButton>
            </Box>
          </div>

        </Toolbar>
      </AppBar>
      
      <div>
        <CategoriesMenu isOpen={isMenuOpen} onClose={handleMenuToggle} />
      </div>
    </div>
  );
};

export default Test;
