
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(null);

  const loginUser = (token) => {
    setAuthState({ token });
  };

  const logoutUser = () => {
    setAuthState(null);
  };

  return (
    <AuthContext.Provider value={{ authState, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
