import React, { useState } from 'react';
import { Account } from '../../Account'
import './login.scss'

const Login = ({ openLogin, onCloseLogin }) => {

    if (!openLogin) return null;

    const [loginUsername, setLoginUsername] = useState("")
    const [loginPassword, setLoginPassword] = useState("")


    const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
  
        e.preventDefault();
  
        const data = {loginUsername, loginPassword}

  
        const formData = {method: 'POST',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data)}
  
        const response = await fetch('http://localhost:13756/account/login', formData)
        const accountData = await response.json()
        var gameAccount = new Account(accountData.username, accountData._id)
    }

  return (
        <div className='center'>
            <form className='form'>
                <div className='form__close-btn' onClick={onCloseLogin}>&#10006;</div>
                <div className='form__field'>
                    <h1 className='form__title'>Login</h1>
                </div>
                <div className='form__field'>
                    <label className='form__label'>Username</label>
                    <input className='form__input' onChange={(e) => { setLoginUsername(e.target.value); }} type='text' />
                </div>
                <div className='form__field'>
                    <label className='form__label'>Password</label>
                    <input className='form__input' onChange={(e) => { setLoginPassword(e.target.value); }} type='password' />
                </div>
                <button className='form__button' onClick={login}>Login</button>
            </form>
        </div>
    )  
}

export default Login

