import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
  return (
    <>
      <h3 className='auth__title'>Login</h3>
      <form>
        <input className='auth__input' autoComplete='off' type="text" placeholder="email" name='email'/>
        <input className='auth__input' type="password" placeholder="password" name='password'/>
        <button className='btn btn-primary btn-block' type='submit'>Login</button>
        <div className='auth__social-networks'>
          <p>Login with social networks.</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
                <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link className='link' to='/auth/register' >Create new account</Link>
      </form>
    </>
  )
}
