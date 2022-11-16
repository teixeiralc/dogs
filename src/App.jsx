import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// CSS
import './styles/App.css';

// React Components
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
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
