import React, { useState } from 'react';
import Header from './utils/header';
import Footer from './utils/footer';
import TaskList from './components/Task/TaskList';
import LoginForm from './components/Auth/LoginForm';
import { Box, Container } from '@mui/material';
import logo from './assets/images/logo.png';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [tasks, setTasks] = useState([ 
    { id: 1, title: 'Tarea 1', description: 'Advertir de Alta Concurrencia', status: 'Pendiente' },
    { id: 2, title: 'Tarea 2', description: 'Revisar Lista de Eventos', status: 'En Progreso' },
    { id: 3, title: 'Tarea 3', description: 'Realizar Backup BD Logs', status: 'Completado' },
  ]);

  const handleLoginClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    } else {
      setIsLoginFormVisible(true);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsLoginFormVisible(false);
  };

  const handleTaskSubmit = (newTask) => {
    setTasks([...tasks, newTask]); 
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Header onLoginClick={handleLoginClick} isLoggedIn={isLoggedIn} />

        <Container sx={{ paddingTop: 4 }}>
          {isLoginFormVisible ? (
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          ) : isLoggedIn ? (
            <TaskList tasks={tasks} onTaskSubmit={handleTaskSubmit} /> 
          ) : (
            <div
            style={{
              display: 'flex',
              justifyContent: 'center', 
              alignItems: 'center', 
              flexDirection: 'column', 
              height: '100vh', 
              textAlign: 'center', 
              marginTop: 0, 
            }}
          >

            <h1 style={{ margin: 0 }}>ADMINISTRADOR DE TAREAS - SEEK</h1>
      
            {/* Imagen centrada */}
            <img src={logo} alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          )}
        </Container>

        <Footer />
      </Box>
    </Box>
  );
};

export default App;
