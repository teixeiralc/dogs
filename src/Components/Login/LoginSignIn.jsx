import React from 'react';
import { USER_POST } from '../../api';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginSignIn = () => {
  const username = useForm();
  const password = useForm();
  const email = useForm('email');

  const { userLogin } = React.useContext(UserContext);

  const createUser = async (e) => {
    e.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const res = await fetch(url, options);
    if (res.ok) userLogin(username.value, password.value);
  };

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={createUser}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="senha" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginSignIn;
