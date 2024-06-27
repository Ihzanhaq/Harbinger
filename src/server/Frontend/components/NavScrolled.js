import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Nav.css'
import {
    NavLink,
    useLocation,
    Link
  } from "react-router-dom";

 

function NavScrolled() {

  const location= useLocation();
   

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

        <li id="scrolled-item" className={location.pathname==='/Feedbacks' ? 'active': ''}><NavLink to="/Feedbacks" >Feedbacks</NavLink>
        </li>

        <li id="scrolled-item" className={location.pathname==='/Reservation' ? 'active': ''}><NavLink to="/Reservation" >Reservation</NavLink>
        </li>

        <li id="scrolled-item" className={location.pathname==='/About' ? 'active': ''}><NavLink to="/About" >About</NavLink>
        </li>
        <Link to='/Login' className='px-3'><button type="button" className='login px-4'>Login</button></Link>
        </ul>
    </div>
  )
}

export default NavScrolled