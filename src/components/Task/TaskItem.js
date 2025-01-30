// /src/components/Task/TaskItem.js
import React from 'react';
import { ListItem, ListItemText, Button } from '@mui/material';

/**
 * Componente de formulario para agregar una nueva tarea.
 * Permite ingresar el título, la descripción y el estado de una tarea.
 * Al enviar el formulario, la nueva tarea es enviada a través de la función `onTaskSubmit`.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {function} props.onTaskSubmit - Función que maneja el envío de la nueva tarea.
 * @returns {JSX.Element} Formulario para agregar una tarea.
 */
const TaskItem = ({ task, onDelete }) => {
  return (
    <ListItem>
      <ListItemText primary={task.title} secondary={task.description} />
      <Button onClick={() => onDelete(task.id)} color="secondary">
        Elimninar Tarea
      </Button>
    </ListItem>
  );
};

export default TaskItem;
