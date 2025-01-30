/**
 * Componente de lista de tareas.
 * Muestra todas las tareas con la opción de editarlas o eliminarlas.
 *
 * @param {Object[]} tasks - Lista de tareas.
 * @returns {JSX.Element} Renderiza la lista de tareas.
 */
export const login = async (username, password) => {
    if (username === 'user' && password === 'clave') {
      return { token: 'fake-jwt-token' };
    } else {
      throw new Error('Credenciales Inváalidas');
    }
  };
  