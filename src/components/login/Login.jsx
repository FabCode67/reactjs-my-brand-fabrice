import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    const user = {
      username: username,
      password: password
    };

    fetch("https://comfortable-eel-pinafore.cyclic.app/api/login", {
      method: 'POST',
      headers:{
        'Accept': 'application/json, tesxt/plain, /',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.status === "fail") {
          setErrorMessage('Invalid username or password');
        } else {
          localStorage.setItem("token", user.data);
          if (user.role === 'isAdmin') {
            navigate('/dashboard');
          } else {
            navigate('/');
          }
        }
      })
      .catch((error) => {
        setErrorMessage('Timeout! Check your connection and refresh the page');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className='login'>
      <div className='loginContainer'>
        <input type='text' placeholder='username' value={username} onChange={handleUsernameChange} />
        <input type='password' placeholder='password' value={password} onChange={handlePasswordChange} />
        <div className='login-button'>
          {isLoading ? (
            <div className='loader' style={{marginLeft: '20%'}}></div>
          ) : (
            <a onClick={handleLoginClick}>Login</a>
          )}
        </div>
        {errorMessage && <p style={{color: 'red', marginLeft: '-10%'}}><u>{errorMessage}</u></p>}
      </div>
    </div>
  );
};

export default Login;
