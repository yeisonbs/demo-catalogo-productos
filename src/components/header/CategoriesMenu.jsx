// components/Header/CategoriesMenu.js
import React from 'react';
import { List, ListItem, ListItemText, AppBar, Toolbar, Box } from '@mui/material';
import categoriesData from '../../data/categories.json';

const CategoriesMenu = () => {
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: 'text.primary' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex' }}>
            <List sx={{ display: 'flex', flexDirection: 'row',paddingY: 1}}>
              {categoriesData.map((category) => (
                <ListItem button key={category.id}>
                   <ListItemText primary={category.name} sx={{ whiteSpace: 'nowrap' }} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default CategoriesMenu;
