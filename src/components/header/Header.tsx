import React from 'react'
import { useState } from "react";
import './header.scss'
import Login from '../login/Login';
import Signup from '../signup/Signup';

const Header: React.FC = () => {

  const [openLoginModal, setLoginOpenModal] = useState<boolean>(false)
  const [openSignupModal, setSignupOpenModal] = useState<boolean>(false)

  return (
    <header className='header'>
      <a className='header__button--download' href='https://dl.dropboxusercontent.com/s/zp19by07yl4ph6p/GameLauncherr.zip?dl=0' download='Launcher'>Download</a>
      <button className='header__button--logout'>logout</button>
       {/* <button className='header__button--login' onClick={() => setLoginOpenModal(true)}>Login</button>}
      <Login openLogin={openLoginModal} onCloseLogin={() => setLoginOpenModal(false)} />
      <button className='header__button--signup' onClick={() => setSignupOpenModal(true)}>Sign up</button>
      <Signup openSignup={openSignupModal} onCloseSignup={() => setSignupOpenModal(false)} /> */}
    </header>
  )
}

export default Header