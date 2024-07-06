import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Nav.css';

import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

function Nav({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/Login');
  };

  return (
    <div className='p-3' id='header'>
      <img
        alt="Harbinger logo top"
        className="img-responsive logo-top mx-auto d-block p-3"
        src="https://static.spotapps.co/website_images/ab_websites/89070_website/logo.png"
      />
      <hr />
      <ul className='navlinks'>
        <li id="sidebar" className={location.pathname === '/' ? 'active home' : 'home'}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li id="sidebar" className={location.pathname === '/Gallery' ? 'active' : ''}>
          <NavLink to="/Gallery">Gallery</NavLink>
        </li>
        <li id="sidebar" className={location.pathname === '/Menu' ? 'active' : ''}>
          <NavLink to="/Menu">Menu</NavLink>
        </li>
        {isLoggedIn && (
          <li id="scrolled-item" className={location.pathname === '/Feedbacks' ? 'active' : ''}>
            <NavLink to="/Feedbacks">Feedbacks</NavLink>
          </li>
        )}
        <li id="sidebar" className={location.pathname === '/Reservation' ? 'active' : ''}>
          <NavLink to="/Reservation">Reservation</NavLink>
        </li>
        <li id="sidebar" className={location.pathname === '/About' ? 'active about' : 'about'}>
          <NavLink to="/About">About</NavLink>
        </li>
        {isLoggedIn ? (
          <>
            <li id="sidebar" className={location.pathname === '/UserDashboard' ? 'active' : ''}>
              <NavLink to="/UserDashboard">User Dashboard</NavLink>
            </li>
            <button type="button" className='login' onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to='/Login'><button type="button" className='login'>Login</button></Link>
        )}
      </ul>
    </div>
  );
}

export default Nav;
