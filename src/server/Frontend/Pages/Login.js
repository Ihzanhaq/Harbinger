import React, { useState, useEffect, Suspense } from 'react';
import '../Styles/Login.css';
import Log from '../components/Log';
import UserRegistration from '../components/UserRegistration';

const AdminLog = React.lazy(() => import('../components/AdminLog'));

function Login({ setNavbar,setIsLoggedIn,setUsername,username }) {
  const [loaded, setLoaded] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showUserRegistration, setShowUserRegistration] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  const handleAdminLoginClick = () => {
    setShowAdminLogin(true);
    setShowUserRegistration(false);
  };

  const handleUserRegistrationClick = () => {
    setShowUserRegistration(true);
    setShowAdminLogin(false);
  };

  const handleGoBackToUserLogin = () => {
    setShowAdminLogin(false);
    setShowUserRegistration(false);
  };

  const handleSwitchToLog = () => {
    setShowUserRegistration(false);
  };

  return (
    <div className={`container-div ${loaded ? 'loaded' : ''}`}>
      {showAdminLogin ? (
        <Suspense fallback={<div>Loading...</div>}>
          <AdminLog handleGoBackToUserLogin={handleGoBackToUserLogin} />
        </Suspense>
      ) : showUserRegistration ? (
        <UserRegistration
          handleGoBackToUserLogin={handleGoBackToUserLogin}
          handleSwitchToLog={handleSwitchToLog}
        />
      ) : (
        <Log
          isAdmin={isAdmin}
          setIsAdmin={setIsAdmin}
          handleAdminLoginClick={handleAdminLoginClick}
          handleUserRegistrationClick={handleUserRegistrationClick}
          setIsLoggedIn={setIsLoggedIn}
          setUsername={setUsername}
          username={username}
        />
      )}
    </div>
  );
}

export default Login;
