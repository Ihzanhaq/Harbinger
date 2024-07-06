import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Nav.css'
import {
    NavLink,
    useLocation,
    Link,
    useNavigate
  } from "react-router-dom";

 

function NavScrolled({isLoggedIn,setIsLoggedIn}) {
  const handleLogout =()=>{
    setIsLoggedIn(false)
    navigate('/Login')
  }

  const navigate= useNavigate();
  const location=useLocation();
   

  return (
        
    <div  className='p-3 mx-auto row ' id='header'>
        <img alt="Harbinger logo top" className="img-responsive-scrolled logo-top d-block p-3 col-md-2" src="https://static.spotapps.co/website_images/ab_websites/89070_website/logo.png"></img>
        <ul className='scrolled-nav col-md-10'>
        <li id="scrolled-item" className={location.pathname==='/' ? 'active': ''}><NavLink to="/">Home</NavLink>
        </li>

        <li id="scrolled-item" className={location.pathname==='/Gallery' ? 'active': ''}><NavLink to="/Gallery" >Gallery</NavLink>
        </li>

        <li id="scrolled-item" className={location.pathname==='/Menu' ? 'active': ''}><NavLink to="/Menu" >Menu</NavLink>
        </li>

        {isLoggedIn && (
          <li id="scrolled-item" className={location.pathname === '/Feedbacks' ? 'active' : ''}>
            <NavLink to="/Feedbacks">Feedbacks</NavLink>
          </li>
        )}

        <li id="scrolled-item" className={location.pathname==='/Reservation' ? 'active': ''}><NavLink to="/Reservation" >Reservation</NavLink>
        </li>

        <li id="scrolled-item" className={location.pathname==='/About' ? 'active': ''}><NavLink to="/About" >About</NavLink>
        </li>
        {isLoggedIn ? (
          <>
            <li id="sidebar" className={location.pathname === '/UserDashboard' ? 'active' : ''}><NavLink to="/UserDashboard">User Dashboard</NavLink></li>
            <button type="button" className='login' onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to='/Login'><button type="button" className='login'>Login</button></Link>
        )}
        </ul>
    </div>
  )
}

export default NavScrolled