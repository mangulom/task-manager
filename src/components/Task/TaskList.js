import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button, TablePagination, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

/**
 * Componente de lista de tareas.
 * Muestra todas las tareas con la opción de editarlas o eliminarlas.
 *
 * @param {Object[]} tasks - Lista de tareas.
 * @returns {JSX.Element} Renderiza la lista de tareas.
 */
const TaskList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Cantidad de tareas por página
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Tarea 1', description: 'Advertir de Alta Concurrencia', status: 'Pendiente' },
    { id: 2, title: 'Tarea 2', description: 'Revisar Lista de Eventos', status: 'En Progreso' },
    { id: 3, title: 'Tarea 3', description: 'Realizar Backup BD Logs', status: 'Completado' },
    { id: 4, title: 'Tarea 4', description: 'Revisar Logs de Error', status: 'Error' },
    { id: 5, title: 'Tarea 5', description: 'Actualizar Documentación', status: 'Pendiente' },
    { id: 6, title: 'Tarea 6', description: 'Corregir Bug en el Login', status: 'Completado' },
    { id: 7, title: 'Tarea 7', description: 'Revisar Requerimientos del Cliente', status: 'En Progreso' },
    { id: 8, title: 'Tarea 8', description: 'Optimizar Consultas SQL', status: 'Completado' },
  ]);
  const [editingTask, setEditingTask] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pendiente':
        return 'info'; // Azul
      case 'En Progreso':
        return 'warning'; // Amarillo
      case 'Completado':
        return 'success'; // Verde
      case 'Error':
        return 'error'; // Rojo
      default:
        return 'default'; // Gris
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setOpenDialog(true);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id)); // Eliminar tarea por ID
  };

  const handleSave = () => {
    setTasks(tasks.map(task => 
      task.id === editingTask.id ? editingTask : task
    ));
    setOpenDialog(false);
    setEditingTask(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 2 }}>
      <Paper sx={{ width: '80%', padding: 2, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h5" gutterBottom>
          Lista de Tareas
        </Typography>

        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Título</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((task) => (
                  <TableRow key={task.id}>
                    <TableCell>{task.title}</TableCell>
                    <TableCell>{task.description}</TableCell>
                    <TableCell>
                      <Button variant="contained" color={getStatusColor(task.status)}>
                        {task.status}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEdit(task)} color="primary">
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(task.id)} color="error">
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={tasks.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {/* Modal de edición de tarea */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Editar Tarea</DialogTitle>
        <DialogContent>
          {editingTask && (
            <>
              <TextField
                label="Título"
                fullWidth
                value={editingTask.title}
                onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Descripción"
                fullWidth
                value={editingTask.description}
                onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Estado"
                fullWidth
                value={editingTask.status}
                onChange={(e) => setEditingTask({ ...editingTask, status: e.target.value })}
                sx={{ marginBottom: 2 }}
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">Cancelar</Button>
          <Button onClick={handleSave} color="primary">Guardar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TaskList;
