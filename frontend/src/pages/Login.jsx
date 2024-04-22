import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make a request to your backend API for login
    axios.post('http://localhost:8000/api/users/', {
      email,
      password,
    })
      .then((response) => {
        // Handle successful login
        alert('Industry User logged in successfully:', response.data);
        console.log('Industry User logged in successfully:', response.data);
        localStorage.setItem("uid",response.data._id );
        navigate(`/user/${response.data._id}`); // Redirect to `/user/${response.data._id}
        // You may want to redirect the user to another page upon successful login
      })
      .catch((error) => {
        // Handle login error
        alert('Error logging in:', error);

        console.error('Error logging in:', error);
        // Display an error message to the user, or redirect them to a different page
      });
  };

  return (
    <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700 w-96 mx-auto">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
            Don't have your industry account registered yet?
            <a className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="../userregister">
              Register here
            </a>
          </p>
        </div>

        <div className="mt-5">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-y-4">
              <div>
                <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Industry Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  required
                  aria-describedby="email-error"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  required
                  aria-describedby="password-error"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
