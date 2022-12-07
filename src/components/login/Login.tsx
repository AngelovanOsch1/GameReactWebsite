import React from 'react'
import './login.scss'

const Login = () => {
  return (
        <div className='center'>
            <form className='form'>
                <div className='form__field'>
                    <h1 className='form__title'>Login</h1>
                </div>
                <div className='form__field'>
                    <label className='form__label'>Username</label>
                    <input className='form__input' type='text' />
                </div>
                <div className='form__field'>
                    <label className='form__label'>Password</label>
                    <input className='form__input' type='password' />
                </div>
                <button className='form__button'>Login</button>
            </form>
        </div>
    )  
}

export default Login