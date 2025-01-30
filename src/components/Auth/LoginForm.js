import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

/**
 * Componente de formulario de inicio de sesión.
 * Permite a los usuarios ingresar su nombre de usuario y contraseña para autenticarse.
 * Si las credenciales son correctas, se ejecuta una función de éxito del login.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {function} props.onLoginSuccess - Función que se ejecuta cuando el login es exitoso.
 *
 * @returns {JSX.Element} El formulario de login con los campos de usuario y contraseña.
 */
const LoginForm = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      onLoginSuccess();  
      setError('Credenciales Correctas');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 3 }}>
      <Typography variant="h6" gutterBottom>
        Ingresar al Administrador de Tareas
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Usuario"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Contraseña"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Iniciar Sesión
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
