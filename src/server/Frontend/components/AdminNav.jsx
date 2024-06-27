import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function AdminNav() {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/Login');
  };

  return (
    <div className='Admin-nav'>
      <ul className='Admin-nav-list'>
        <li>
          <NavLink to="/Admin/Res" className={({ isActive }) => (isActive ? 'active' : '')}>
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink to="/Admin/MenuManagement" className={({ isActive }) => (isActive ? 'active' : '')}>
            Menu Management
          </NavLink>
        </li>
        <li>
          <NavLink to="/Admin/Feedbacks" className={({ isActive }) => (isActive ? 'active' : '')}>
            Feedbacks
          </NavLink>
        </li>
      </ul>
      <button type="button" className='login' onClick={logout}>Log Out</button>
    </div>
  );
}

export default AdminNav;


