import React from 'react';
import { Box, List, ListItem, ListItemText, Divider, IconButton } from '@mui/material';
import { Home, ListAlt, Add, Settings, Menu } from '@mui/icons-material';

/**
 * Componente de barra lateral (Sidebar).
 * Muestra un menú de navegación con opciones de inicio, lista de tareas y configuración.
 * Este componente es visible dependiendo del valor de la propiedad `open`.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {boolean} props.open - Controla si la barra lateral está visible o no.
 * @param {function} props.toggleSidebar - Función para alternar la visibilidad de la barra lateral.
 *
 * @returns {JSX.Element} La barra lateral con las opciones de navegación.
 */
const Sidebar = ({ open, toggleSidebar }) => {
  return (
    <Box
      sx={{
        width: 250,
        height: '100vh',
        bgcolor: '#6a1b9a',
        color: 'yellow',
        display: open ? 'flex' : 'none',
        flexDirection: 'column',
        paddingTop: 3,
        position: 'fixed',
      }}
    >
      <List>
        <ListItem button>
          <Home sx={{ color: 'yellow', marginRight: 2 }} />
          <ListItemText primary="Inicio" sx={{ color: 'yellow' }} />
        </ListItem>
        <ListItem button>
          <ListAlt sx={{ color: 'yellow', marginRight: 2 }} />
          <ListItemText primary="Lista de Tareas" sx={{ color: 'yellow' }} />
        </ListItem>
        <ListItem button>
          <Settings sx={{ color: 'yellow', marginRight: 2 }} />
          <ListItemText primary="Configuración" sx={{ color: 'yellow' }} />
        </ListItem>
      </List>
      <Divider sx={{ borderColor: 'yellow' }} />
    </Box>
  );
};

export default Sidebar;
