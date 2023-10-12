import React, { useState } from 'react'
import classes from './Signup.module.css'
import { Link, useNavigate } from 'react-router-dom'



const Signup = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const Navigate = useNavigate();

  const SubmitLogin=()=>{
    Navigate('/')
  }


  const HandleSubmit = (e) =>{
    e.preventDefault()
    setEmail("")
    setPassword("")
  }
  return (
    <div className={classes.Signup}>
      <Link to={'/'}>
        <div className={classes.Logo}>
            <h1>MI</h1>
        </div>
      </Link>
        
      <div className={classes.SignupItem}>
        <h2>Sign in</h2>
        <form action="" className={classes.SignupForm} onSubmit={HandleSubmit}>
          <label htmlFor="email">Enter your Email or Phone </label>
          <input 
            type="text" 
            id='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <label htmlFor="">Possword</label>
          <input 
            type="Password" 
            id='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button onClick={SubmitLogin}>Login</button>
        </form>
        <p><span>Forgot Password?</span> </p>
        <p>By continuing, you agree to Redmi's <span>Conditions of Use</span> and <span>Privacy notice.</span></p>

      </div> 
   
    </div>
  )
}

export default Signup