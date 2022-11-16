import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const res = await fetch(url, options);
    const json = await res.json();
    setData(json);
    setLogin(true);
  };

  const userLogin = React.useCallback(
    async (username, password) => {
      try {
        setError(null);
        setLoading(true);

        const { url, options } = TOKEN_POST({ username, password });
        const res = await fetch(url, options);

        if (!res.ok) throw new Error(`Error: ${res.statusText}`);
        const { token } = await res.json();
        window.localStorage.setItem('token', token);
        await getUser(token);
        navigate('/conta');
      } catch (err) {
        setError(err.message);
        setLogin(false);
      } finally {
        setLoading(false);
      }
    },
    [navigate]
  );

  const userLogout = React.useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(null);
    window.localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  React.useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);

          const { url, options } = TOKEN_VALIDATE_POST(token);
          const res = await fetch(url, options);

          if (!res.ok) throw new Error('Token inválido');
          await getUser(token);
        } catch {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    };
    autoLogin();
  }, [userLogout]);

  const UserContextValues = React.useMemo(
    () => ({ userLogin, userLogout, data, error, loading, login }),
    [userLogin, userLogout, data, error, loading, login]
  );

  return (
    <UserContext.Provider value={UserContextValues}>
      {children}
    </UserContext.Provider>
  );
};
