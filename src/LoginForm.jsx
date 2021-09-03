// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import  './LoginForm.css';
import Logo from './image/logImage.svg'


export default function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');



  const setAnyPassword = e => {
    setPassword(e.target.value);
  };

  const setAnyLogin = e => {
    setLogin(e.target.value);
  };

  const handleLoginClick = () => {
    console.log(`Login - ${login}`);
    console.log(`Password - ${password}`);
    setLogin('');
    setPassword('');
  };

  return (
    <div className='wrapper'>
      <h1 className='title'>MyConference</h1>
      <img className='logo'src={Logo}/>
      <input className='userInput' type="date" placeholder="EMAIL"></input>
      <input className='userInput' type="password" placeholder="PASSWORD"></input>
      <button className='logInBtn'>LOG IN</button>
    </div>
  );
}
