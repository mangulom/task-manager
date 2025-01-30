import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

/**
 * Componente de formulario para agregar una nueva tarea.
 * Permite ingresar el título, la descripción y el estado de una tarea.
 * Al enviar el formulario, la nueva tarea es enviada a través de la función `onTaskSubmit`.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {function} props.onTaskSubmit - Función que maneja el envío de la nueva tarea.
 * @returns {JSX.Element} Formulario para agregar una tarea.
 */
const TaskForm = ({ onTaskSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Pendiente');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTask = {
      id: Date.now(), 
      title,
      description,
      status
    };

    onTaskSubmit(newTask); 
    setTitle(''); 
    setDescription('');
    setStatus('Pendiente');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Título"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <TextField
        label="Descripción"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
      />
      <TextField
        label="Estado"
        variant="outlined"
        select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        fullWidth
        SelectProps={{
          native: true,
        }}
      >
        <option value="Pendiente">Pendiente</option>
        <option value="En Progreso">En Progreso</option>
        <option value="Completado">Completado</option>
      </TextField>

      <Button variant="contained" type="submit">Agregar Tarea</Button>
    </Box>
  );
};

export default TaskForm;
