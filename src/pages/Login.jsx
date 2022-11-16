import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import LoginForm from '../Components/Login/LoginForm';
import LoginCreate from '../Components/Login/LoginCreate';
import LoginLostPassword from '../Components/Login/LoginLostPassword';
import LoginResetPassword from '../Components/Login/LoginResetPassword';
import { UserContext } from '../UserContext';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/conta" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginLostPassword />} />
        <Route path="resetar" element={<LoginResetPassword />} />
      </Routes>
    </div>
  );
};

export default Login;
