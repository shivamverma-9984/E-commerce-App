import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logout from '../Pages/Logout';

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');


  const fun=()=>{
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    const storedUserName = localStorage.getItem('userName');
    setIsLoggedIn(loggedInStatus);
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }
  useEffect(() => {
    // Sync state with localStorage
       fun();
  }, [fun]);

 
  // const handleLoginSuccess = (name) => {
  //   localStorage.setItem('isLoggedIn', 'true');
  //   localStorage.setItem('userName', name);
  //   setIsLoggedIn(true);
  //   setUserName(name);
  //   navigate('/'); // Redirect to home or another page
  // };

  const handleLogoutSuccess = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    setUserName('');
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="auth-page-container">
      {!isLoggedIn ? (
        <div className="login-section">
          <Link to="/login">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Sign In
            </button>
          </Link>
          {/* Render Login Component */}
          {/* Uncomment if Login is a modal or inline component */}
          {/* <Login onLoginSuccess={handleLoginSuccess} /> */}
        </div>
      ) : (
        

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          {/* <h2>Welcome, {userName}!</h2>
          <p>Enjoy shopping for your favorite products!</p> */}
          {/* Render Logout Button */}
        {/* <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="images.png" alt="Bordered avatar"/> */}

        <Logout onLogoutSuccess={handleLogoutSuccess} className="bg-green-600"/>
        </button>
        
      )}
    </div>
  );
};

export default AuthPage;
