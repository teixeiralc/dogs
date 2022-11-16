import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// CSS
import './styles/App.css';

// React Components
import Home from './pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './pages/Login';
import { UserStorage } from './UserContext';

const App = () => {
  return (
    <UserStorage>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
      </Routes>
      <Footer />
    </UserStorage>
  );
};

const WrappedApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default WrappedApp;
