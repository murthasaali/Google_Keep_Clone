import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Check if there's a logged-in user in local storage when the component mounts
    const storedUser = localStorage.getItem('loggedInUser');
    console.log('Stored User:', storedUser); // Log the stored user
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (user) => {
    // Save username to local storage and set the loggedInUser state
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    setLoggedInUser(user);
  };

  const logout = () => {
    // Remove username from local storage and set the loggedInUser state to null
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
