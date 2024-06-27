import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './server/Frontend/Pages/Home';
import Users from './server/Frontend/Pages/Gallery';
import Menu from './server/Frontend/Pages/Menu';
import './server/Frontend/Styles/main.css';
import About from './server/Frontend/Pages/About';
import Appfooter from './server/Frontend/components/footer';
import Nav from './server/Frontend/components/Nav';
import NavScrolled from './server/Frontend/components/NavScrolled';
import Reservation from './server/Frontend/Pages/Reservation';
import Login from './server/Frontend/Pages/Login';
import Admin from './server/Frontend/Pages/Admin';
import Feedbacks from './server/Frontend/Pages/Feedbacks';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [navbar, setNavbar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const location = useLocation();

  useEffect(() => {
    // Logic to determine login status on initial load (if needed)
  }, []);

  const changeNav = () => {
    if (window.scrollY > 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  const isAdminPage = location.pathname.startsWith("/Admin");

  // Function to handle user login
  const handleLogin = () => {
    // Perform authentication logic, set isLoggedIn to true if successful
    setIsLoggedIn(true);
  };

  // Function to handle user logout
  const handleLogout = () => {
    // Perform logout logic, set isLoggedIn to false
    setIsLoggedIn(false);
  };

  return (
    <div className='back'>
      {!isAdminPage && (
        <>
          <div className={navbar ? 'nav-hide' : 'nav'}>
            <Nav isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
          </div>
          <div className={navbar ? 'nav-scrolled' : 'nav-scrolled-hide'}>
            <NavScrolled isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
          </div>
        </>
      )}
      <div className='pt-5 mt-5'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Users />} />
        <Route path="/Menu" element={<Menu navbar={navbar}/>} />
        <Route path="/Feedbacks" element={<Feedbacks />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login isLoggedIn={isLoggedIn} handleLogin={handleLogin} />} />
        <Route path="/Admin/*" element={<Admin />} />
      </Routes>
      </div>
      <footer className=''>
        <Appfooter />
      </footer>
    </div>
  );
}

export default App;
