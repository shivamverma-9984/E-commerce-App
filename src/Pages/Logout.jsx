// Logout.js
import React from 'react';

const Logout = ({ onLogoutSuccess }) => {
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Clear login state
    onLogoutSuccess(); // Update UI or navigate
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
