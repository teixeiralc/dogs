import React from 'react';
import { useDispatch } from 'react-redux';
import { USER_POST } from '../../api';
import { userLogin } from '../../store/user';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginSignIn = () => {
  const username = useForm();
  const password = useForm();
  const email = useForm('email');

  const dispatch = useDispatch();
  const { error, loading, request } = useFetch();

  const createUser = async (e) => {
    e.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { res } = await request(url, options);
    if (res.ok)
      dispatch(
        userLogin({ username: username.value, password: password.value })
      );
  };

  return (
    <section className="animeLeft">
      <Head title="Crie sua conta" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={createUser}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="senha" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginSignIn;
