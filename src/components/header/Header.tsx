import React, { Dispatch } from 'react'
import { useState } from "react";
import './header.scss'
import Login from '../login/Login';
import Signup from '../signup/Signup';

interface Props {
  setAccount: Dispatch<string>
  account: string
}

const Header: React.FC<Props> = ({ account, setAccount }) => {

  const [openLoginModal, setLoginOpenModal] = useState<boolean>(false)
  const [openSignupModal, setSignupOpenModal] = useState<boolean>(false)

  return (
    <header className='header'>
      { account ?
      <>
        <a className='header__button--download' href='https://dl.dropboxusercontent.com/s/ey4pt2tkg2ngd3m/Launcher.zip?dl=0' download='Launcher'>Download</a>
        <button onClick={() => setAccount('')} className='header__button--logout'>logout</button>
      </>
      :
      <>
        <button className='header__button--login' onClick={() => setLoginOpenModal(true)}>Login</button><Login setAccount={setAccount} openLogin={openLoginModal} onCloseLogin={() => setLoginOpenModal(false)} />
        <button className='header__button--signup' onClick={() => setSignupOpenModal(true)}>Sign up</button><Signup openSignup={openSignupModal} onCloseSignup={() => setSignupOpenModal(false)} />
      </> }
    </header>
  )
}

export default Header