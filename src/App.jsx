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
import Photo from './Components/Photo/Photo';
import { UserStorage } from './UserContext';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import UserProfile from './Components/User/UserProfile';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className="App">
      <UserStorage>
        <Header />
        <main className="AppBody">
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
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </UserStorage>
    </div>
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
