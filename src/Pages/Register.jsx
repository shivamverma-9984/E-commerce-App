// // Register.js
// import React, { useState } from 'react';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleRegister = (e) => {
//     e.preventDefault();

//     // Get existing users from localStorage
//     const users = JSON.parse(localStorage.getItem('users')) || [];

//     // Check if user already exists
//     if (users.some((user) => user.email === email)) {
//       setError('User already registered');
//       return;
//     }

//     // Add new user
//     users.push({ email, password });
//     localStorage.setItem('users', JSON.stringify(users));

//     setError('');
//     setSuccess('Registration successful!');
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <form onSubmit={handleRegister}>
//       <h2>Register</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {success && <p style={{ color: 'green' }}>{success}</p>}
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
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
 const navigate=useNavigate()
  const handleRegister = (e) => {
    e.preventDefault();

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user already exists
    if (users.some((user) => user.email === email)) {
      setError('User already registered');
      return;
    }

    // Add new user
    users.push({username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    toast.success("Register successfull ")
    navigate('/login')
    setError('');
    setSuccess('Registration successful!');
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <section>
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0 mt-24 mb-8">
        
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl  text-center">
                    Create an account
                </h1>
                <form className="space-y-4 md:space-y-6"  onSubmit={handleRegister}>
                    <div>
                        <label for="name" className="block mb-1 text-sm font-medium text-gray-900 ">Your Name</label>
                        <input  className="border border-gray-300  text-sm rounded-lg  w-full p-2" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="UserName" required=""/>
                    </div>
                    <div>
                        <label for="email" className="block mb-1 text-sm font-medium text-gray-900 ">Your email</label>
                        <input  className=" border border-gray-300  text-sm rounded-lg  w-full p-2"  type="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Your email" required/>
                    </div>
                    <div>
                        <label for="password" className="block mb-1 text-sm font-medium text-gray-900 ">Password</label>
                        <input placeholder="••••••••" className="border border-gray-300  text-sm rounded-lg  w-full p-2"    type="password" value={password}  onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    {/* <div>
                        <label for="confirm-password" className="block mb-1 text-sm font-medium text-gray-900">Confirm password</label>
                        <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="border border-gray-300  text-sm rounded-lg  w-full p-2" required=""/>
                    </div> */}
                    {/* <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded" required="" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label for="terms" className="font-light ">I accept the <a className="font-medium " href="#">Terms and Conditions</a></label>
                        </div>
                    </div> */}
                    <button type="submit" className="w-full bg-gray-900 text-white py-2">Create an account</button>
                    <p className="text-sm font-light">
                        Already have an account? <Link to="/login" className="font-medium text-primary-600 ">Login here</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Register