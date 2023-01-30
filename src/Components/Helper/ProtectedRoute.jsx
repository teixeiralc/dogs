import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { data: login } = useSelector((state) => state.user);

  return login ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
