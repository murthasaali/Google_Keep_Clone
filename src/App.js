import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPageComponent from './pages/LandingPageComponent';
import RegistrationComponent from './pages/RegistrationComponent';
import LoginComponent from './pages/LoginComponent';
import { AuthProvider } from './context api/authContext'; // Ensure proper import
import Navbar from './components/navbar';
import { useNavigate } from 'react-router-dom';

function RedirectToLogin() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser===null) {
      navigate('/login');
    }
  }, [loggedInUser, navigate]);

  return null; // Redirecting, so no need to render anything
}

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Router>
        <Routes>
          <Route element={<RedirectToLogin />} /> {/* Use the wrapper component */}
          <Route exact path="/" element={<LandingPageComponent />} />
          <Route path="/registration" element={<RegistrationComponent />} />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
