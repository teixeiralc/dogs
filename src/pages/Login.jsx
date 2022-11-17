import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import LoginForm from '../Components/Login/LoginForm';
import LoginSignIn from '../Components/Login/LoginSignIn';
import LoginLostPassword from '../Components/Login/LoginLostPassword';
import LoginResetPassword from '../Components/Login/LoginResetPassword';
import { UserContext } from '../UserContext';

import styles from '../styles/modules/Forms/Login.module.css';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="cadastro" element={<LoginSignIn />} />
          <Route path="forgot" element={<LoginLostPassword />} />
          <Route path="resetar" element={<LoginResetPassword />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
