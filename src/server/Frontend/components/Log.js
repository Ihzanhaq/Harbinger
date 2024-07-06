  import React, { useState } from "react";
  import "bootstrap/dist/css/bootstrap.min.css";
  import { FaUser } from "react-icons/fa";
  import { MdKey } from "react-icons/md";
  import { useNavigate } from "react-router-dom";
  import axios from "axios";

  function Log({ isAdmin, setIsAdmin,setIsLoggedIn, handleAdminLoginClick, handleUserRegistrationClick,setUsername,username }) {
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(undefined);

    let navigate = useNavigate();

    function handleSubmit(event) {
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
        axios.post('http://localhost:8081/login', { username, password })
          .then(res => {
            if (res.data === 'Success') {
              setIsLoggedIn(true)
              if (isAdmin) {
                navigate('/Admin');
              } else {
                navigate('/UserDashboard');
              }
            } else if (res.data === 'No record') {
              setStatus('Invalid Details');
            }
          })
          .catch((err) => {
            console.log("Error occurred:", err);
          });
      }
    }

    return (
      <div className="p-5">
        <div className="logbox">
          <form action="" onSubmit={handleSubmit}>
            <h1>User Login</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={e => setUsername(e.target.value)}
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
                required
              />
              <MdKey className="icon" />
              {errors.password && <span>{errors.password}</span>}
            </div>
            <span><p>{status}</p></span>
            <button type="submit">Login</button>
            <div className="text-center">
              <p className="p-3 pb-0 admin-link">New User? <span onClick={handleUserRegistrationClick}>Register</span></p>
              <p className="p-3 pb-0 pt-0 admin-link">If you are an admin, <span onClick={handleAdminLoginClick}>click here</span></p>
            </div>
          </form>
        </div>
      </div>
    );
  }

  export default Log;
