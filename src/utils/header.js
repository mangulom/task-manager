import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

/**
 * @param {Object[]} tasks
 * @returns {JSX.Element} 
 */
const Header = ({ onLoginClick, isLoggedIn }) => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: '#6a1b9a' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Administrador de Tareas
        </Typography>
        <Button
          color="inherit"
          onClick={onLoginClick}
          startIcon={<AccountCircle />}
        >
          {isLoggedIn ? 'Cerrar Sesión' : 'Iniciar Sesión'}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;