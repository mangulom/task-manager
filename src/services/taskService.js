/**
 * Obtiene la lista de tareas simulada.
 * 
 * @returns {Object[]} Lista de tareas simuladas.
 * @returns {number} return.id - Identificador único de la tarea.
 * @returns {string} return.title - Título de la tarea.
 * @returns {string} return.description - Descripción de la tarea.
 * @returns {string} return.status - Estado actual de la tarea.
 */
export const getTasks = () => {
    return [
      { id: 1, title: 'Task 1', description: 'Description 1', status: 'To Do' },
      { id: 2, title: 'Task 2', description: 'Description 2', status: 'In Progress' },
      { id: 3, title: 'Task 3', description: 'Description 3', status: 'Completed' },
    ];
  };
  
  /**
 * Simula la adición de una nueva tarea.
 * 
 * @param {Object} task - Nueva tarea que se va a agregar.
 * @param {string} task.title - Título de la nueva tarea.
 * @param {string} task.description - Descripción de la nueva tarea.
 * @param {string} task.status - Estado de la nueva tarea.
 */
  export const addTask = (task) => {
    // Simula la adición de una tarea
    console.log('Tarea agregada:', task);
  };
  
  /**
 * Simula la actualización de una tarea.
 * 
 * @param {number} id - Identificador de la tarea a actualizar.
 * @param {Object} updatedTask - Datos actualizados de la tarea.
 * @param {string} updatedTask.title - Título actualizado de la tarea.
 * @param {string} updatedTask.description - Descripción actualizada de la tarea.
 * @param {string} updatedTask.status - Estado actualizado de la tarea.
 */
  export const updateTask = (id, updatedTask) => {
    // Simula la actualización de una tarea
    console.log(`Tarea ${id} actualizada:`, updatedTask);
  };
  

  /**
 * Simula la eliminación de una tarea.
 * 
 * @param {number} id - Identificador de la tarea a eliminar.
 */
  export const deleteTask = (id) => {
    // Simula la eliminación de una tarea
    console.log(`Tarea ${id} Eliminada`);
  };
  