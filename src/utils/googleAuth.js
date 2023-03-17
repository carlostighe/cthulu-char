import React from 'react';
import { GoogleLogin } from 'react-google-login';

const CLIENT_ID = 'YOUR_CLIENT_ID'; // Replace with your actual client ID

const googleAuth = ({ onSuccess, onFailure }) => {
  const handleSuccess = (response) => {
    console.log('Login success. Google user data: ', response.profileObj);
    onSuccess(response);
  };

  const handleFailure = (response) => {
    console.log('Login failed. Error: ', response.error);
    onFailure(response);
  };

  return (
    <GoogleLogin
      clientId={CLIENT_ID}
      buttonText="Login with Google"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default googleAuth;
