import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginForm from '../Components/Login/LoginForm';
import LoginCreate from '../Components/Login/LoginCreate';
import LoginLostPassword from '../Components/Login/LoginLostPassword';
import LoginResetPassword from '../Components/Login/LoginResetPassword';

const Login = () => {
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
