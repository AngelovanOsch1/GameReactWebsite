import './signup.scss'

const Signup = ({openSignup, onCloseSignup }) => {

  if (!openSignup) return null;

  return (
    <div className='center'>
      <form className='form'>
          <div className='form__close-btn' onClick={onCloseSignup}>&#10006;</div>
          <div className='form__field'>
              <h1 className='form__title'>Register</h1>
          </div>
          <div className='form__field'>
              <label className='form__label'>Username</label>
              <input className='form__input' type='text' />
          </div>
          <div className='form__field'>
              <label className='form__label'>Password</label>
              <input className='form__input' type='password' />
          </div>
          <button className='form__button'>Register</button>
      </form>
    </div>
  )
}

export default Signup