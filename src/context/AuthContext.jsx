import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Initially, user is not logged in

  const login = (email, password) => {
    // Replace with predefined credentials
    const predefinedUser = {
      email: 'user@example.com',
      password: 'password123',
    };

    if (email === predefinedUser.email && password === predefinedUser.password) {
      setIsAuthenticated(true);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
