import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import AppRoutes from '../../constants/constants';

const ProtectedRoute = ({ element: Component, ...props }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!props.isLoggedIn) {
      navigate(AppRoutes.Main, { replace: true });
    }
  }, [props.isLoggedIn]);

  return (
    <Component {...props} />
  );
};

export default ProtectedRoute;
