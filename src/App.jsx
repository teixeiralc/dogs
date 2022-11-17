import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// CSS
import './styles/App.css';

// React Components
import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { UserStorage } from './UserContext';
import ProtectedRoute from './Components/Helper/ProtectedRoute';

const App = () => {
  return (
    <UserStorage>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/*" element={<Login />} />
        <Route
          path="conta/*"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
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
