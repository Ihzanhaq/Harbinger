import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdKey } from 'react-icons/md';
import axios from 'axios';

function UserRegistration({ handleGoBackToUserLogin, handleSwitchToLog }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(undefined);
  const [loading, setLoading] = useState(false); // State for loading animation
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // State for success message

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (password.length < 6) {
      validationErrors.password = 'Password should be at least 6 characters';
    }
    if (username.length < 6) {
      validationErrors.username = 'Username should be at least 6 characters';
    }
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true); // Show loading animation

      axios.post('http://localhost:8081/user/register', { username, password })
        .then(res => {
          setLoading(false); // Hide loading animation
          if (res.data === 'Success') {
            setRegistrationSuccess(true); // Show success message
            setTimeout(() => {
              handleSwitchToLog(); // Switch to Log component after 1 second
            }, 1000); // 1 second delay
          } else {
            setStatus('Registration failed');
          }
        })
        .catch((err) => {
          setLoading(false); // Hide loading animation on error
          console.log('Error occurred:', err);
        });
    }
  };

  return (
    <div className="p-5">
      <div className="logbox">
        <form action="" onSubmit={handleSubmit}>
          <h1>User Registration</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              required
            />
            <MdKey className="icon" />
            {errors.password && <span>{errors.password}</span>}
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="off"
              required
            />
            <MdKey className="icon" />
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
          </div>
          <button type="submit">Register</button>
          {registrationSuccess && (
            <div className="success-message">
              <p>Registered successfully! Redirecting...</p>
            </div>
          )}
          <div className="text-center">
            <p className="p-3 pb-0 admin-link">Go back to <span onClick={handleGoBackToUserLogin}>User Login</span></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserRegistration;
