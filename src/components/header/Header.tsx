import React from 'react'
import { useState } from "react";
import './header.scss'
import Login from '../login/Login';
import Signup from '../signup/Signup';

const Header = () => {

  const [openLoginModal, setLoginOpenModal] = useState(false)
  const [openSignupModal, setSignupOpenModal] = useState(false)

  return (
    <header className='header'>
      <button className='header__button--login' onClick={() => setLoginOpenModal(true)}>Login</button>
      <Login openLogin={openLoginModal} onCloseLogin={() => setLoginOpenModal(false)} />
      <button className='header__button--signup' onClick={() => setSignupOpenModal(true)}>Sign up</button>
      <Signup openSignup={openSignupModal} onCloseSignup={() => setSignupOpenModal(false)} />
    </header>
  )
}

export default Header