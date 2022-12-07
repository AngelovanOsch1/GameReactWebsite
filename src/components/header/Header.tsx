import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <header className='header'>
      <button className='header__button--login'>Login</button>
      <button className='header__button--signup'>Sign up</button>
    </header>
  )
}

export default Header