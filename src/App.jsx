import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Photo from './Components/Photo/Photo';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import UserProfile from './Components/User/UserProfile';
import NotFound from './pages/NotFound';
import './styles/App.css';
import { autoLogin } from './store/user';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <div className="App">
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
