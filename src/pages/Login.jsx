import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginForm from '../Components/Login/LoginForm';
import LoginSignIn from '../Components/Login/LoginSignIn';
import LoginLostPassword from '../Components/Login/LoginLostPassword';
import LoginResetPassword from '../Components/Login/LoginResetPassword';
import NotFound from './NotFound';

import styles from '../styles/modules/Forms/Login.module.css';
import Loading from '../Components/Helper/Loading';

const Login = () => {
  const { data, loading } = useSelector((state) => state.user);

  if (loading) return <Loading />;
  if (data) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="cadastro" element={<LoginSignIn />} />
          <Route path="recuperar-senha" element={<LoginLostPassword />} />
          <Route path="resetar-senha" element={<LoginResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
