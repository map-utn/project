import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

import { onRegister } from 'redux/actions/user.actions';

import Loading from 'components/commons/Loading';
import LayoutContainer from 'containers/LayoutContainer';

import RegisterView from 'views/RegisterView';

const RegisterContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, data } = useSelector((state) => state.user);

  const onSubmit = (values) => {
    dispatch(onRegister(values));
    navigate('login');
  };

  return (
    <LayoutContainer hasHeader={false}>
      <RegisterView onSubmit={onSubmit} />
      {loading && <Loading isModalMode message="Loading" />}
      {data && <Navigate to="/login" replace={true} />}
    </LayoutContainer>
  );
};

export default RegisterContainer;
