import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from '../../store/user';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import Error from '../Helper/Error';
import styles from '../../styles/modules/Forms/LoginForm.module.css';
import stylesBtn from '../../styles/modules/Forms/Button.module.css';
import Head from '../Helper/Head';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { token, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const loading = token.loading || user.loading;
  const error = token.error || user.error;

  async function handleLoginSubmit(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      dispatch(
        userLogin({ username: username.value, password: password.value })
      );
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleLoginSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && 'Dados incorretos.'} />
      </form>
      <Link className={styles.forgot} to="/login/recuperar-senha">
        Esqueceu a senha?
      </Link>
      <div className={styles.sign_in}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui uma conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.btn} to="/login/cadastro">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
