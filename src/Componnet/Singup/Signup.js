import React from 'react'
import classes from './Signup.module.css'

const Signup = () => {
  return (
    <div className={classes.Signup}>
        <div className={classes.Logo}>
            <h1>MI</h1>
        </div>
      <div className={classes.SignupItem}>
        <h2>Sign in</h2>
        <form action="" className={classes.SignupForm}>
          <label htmlFor="">Enter your Email or Phone </label>
          <input type="text" />

          <label htmlFor="">Possword</label>
          <input type="text" />

          <button>Login</button>
        </form>
        <p>Forgot Password?</p>
        <p>By continuing, you agree to Redmi's <span>Conditions of Use</span> and <span>Privacy notice</span></p>

      </div> 
   
    </div>
  )
}

export default Signup