import React from 'react';
import { Box, Typography } from '@mui/material';
/**
 * Componente de lista de tareas.
 * Muestra todas las tareas con la opción de editarlas o eliminarlas.
 *
 * @param {Object[]} tasks - Lista de tareas.
 * @returns {JSX.Element} Renderiza la lista de tareas.
 */
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#6a1b9a',
        color: 'yellow',
        textAlign: 'center',
        padding: 2,
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2">
        © 2025 Mauricio Antonio Angulo Martinez
      </Typography>
    </Box>
  );
};

export default Footer;
