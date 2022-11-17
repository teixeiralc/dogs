import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext);

  // If the user isn't logged in, navigate to the login page
  return login ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
