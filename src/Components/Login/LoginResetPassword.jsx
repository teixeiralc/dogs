import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { RESET_PASSWORD } from '../../api';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginResetPassword = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.validate()) {
      const { url, options } = RESET_PASSWORD({
        login,
        key,
        password: password.value,
      });
      const { res } = await request(url, options);
      if (res.ok) navigate('/login');
    }
  };

  return (
    <section>
      <Head title="Resete sua senha" />
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar Senha</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
};

export default LoginResetPassword;
