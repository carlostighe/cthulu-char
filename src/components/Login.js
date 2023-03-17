import React from 'react';
import googleAuth from '../utils/googleAuth';

const Login = () => {
  const handleLoginSuccess = (response) => {
    console.log('Login success! Access token: ', response.accessToken);
    // Do something with the access token
  };

  const handleLoginFailure = (response) => {
    console.log('Login failed. Error: ', response.error);
    // Do something with the error
  };

  return (
    <div>
      <h1>Login</h1>
      {googleAuth({
        onSuccess: handleLoginSuccess,
        onFailure: handleLoginFailure,
      })}
    </div>
  );
};

export default Login;
