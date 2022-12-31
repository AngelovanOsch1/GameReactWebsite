import { useState } from 'react';

import './signup.scss'

const Signup = ({ openSignup, onCloseSignup}) => {

  if (!openSignup) return null;

  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async (e: React.MouseEvent<HTMLButtonElement>) => {

    e.preventDefault();

    const data = {registerUsername, registerPassword}

    const formData = {method: 'POST',
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(data)}

     const response = await fetch('http://localhost:13756/account/create', formData)
     const json = await response.json()
     console.log(json)
  }

  return (
    <div className='center'>
      <form className='form'>
          <div className='form__close-btn' onClick={onCloseSignup}>&#10006;</div>
          <div className='form__field'>
              <h1 className='form__title'>Register</h1>
          </div>
          <div className='form__field'>
              <label className='form__label'>Username</label>
              <input className='form__input' onChange={(e) => { setRegisterUsername(e.target.value); }} type='text' />
          </div>
          <div className='form__field'>
              <label className='form__label'>Password</label>
              <input className='form__input' onChange={(e) => { setRegisterPassword(e.target.value); }} type='password' />
          </div>
          <button className='form__button' onClick={register}>Register</button>
      </form>
    </div>
  )
}

export default Signup