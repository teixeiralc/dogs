import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { LOST_PASSWORD } from '../../api';
import Error from '../Helper/Error';

const LoginLostPassword = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (login.validate()) {
      const { url, options } = LOST_PASSWORD({
        login: login.value,
        url: window.location.href.replace('recuperar-senha', 'resetar-senha'),
      });
      await request(url, options);
    }
  };

  return (
    <section>
      <h1 className="title">Esqueceu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginLostPassword;
