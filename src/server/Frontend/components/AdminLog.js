import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser } from 'react-icons/fa';
import { MdKey } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function AdminLog({ handleGoBackToUserLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(undefined);

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (password.length < 6) {
      validationErrors.password = 'Password should be at least 6 characters';
    }
    if (username.length < 6) {
      validationErrors.username = 'Username should be at least 6 characters';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Hardcoded credentials
      const hardcodedUsername = 'Admin123';
      const hardcodedPassword = 'Admin123';

      if (username === hardcodedUsername && password === hardcodedPassword) {
        navigate('/Admin');
        // Additional admin login logic if needed
      } else {
        setStatus('Invalid Details');
      }
    }
  };

  return (
    <div className="p-5">
      <div className="logbox">
        <form action="" onSubmit={handleSubmit}>
          <h1>Admin Login</h1>
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
          <span><p>{status}</p></span>
          <button type="submit">Login</button>
          <div className="text-center">
            <p className="p-3 pb-0 pt-3 admin-link">Go back to <span onClick={handleGoBackToUserLogin}>User Login</span></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLog;

