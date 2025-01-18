// // Login.js
// import React, { useState } from 'react';

// const Login = ({ onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Get users from localStorage
//     const users = JSON.parse(localStorage.getItem('users')) || [];

//     // Validate user credentials
//     const user = users.find((user) => user.email === email && user.password === password);

//     if (user) {
//       localStorage.setItem('isLoggedIn', 'true'); // Set login state
//       setError('');
//       onLoginSuccess(); // Callback to update UI
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <h2>Login</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({onLoginSuccess}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Validate user credentials
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem('isLoggedIn', 'true'); // Set login state
      setLoading(false);
      navigate('/'); // Redirect to dashboard
    } else {
      setLoading(false);
      setError('Invalid email or password');
    }
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-24 mb-6">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
              Login to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              {error && <p style={{ color: 'red' }}>{error}</p>}

              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  className="border border-gray-300 text-sm rounded-lg w-full p-2"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  placeholder="••••••••"
                  className="border border-gray-300 text-sm rounded-lg w-full p-2"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-2"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
              <p className="text-sm font-light">
                Don't have an account?{' '}
                <Link to="/register" className="font-medium text-primary-600">
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
