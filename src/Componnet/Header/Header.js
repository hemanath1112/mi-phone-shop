import React from 'react'
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.LeftHeader}> 
         <img src="" alt="" />
         <p>Phones</p>
         <p>Tv's</p>
      </div>
      <div className={classes.RightHeader}>
        <input type="text" />
        {/* search box Logo */}
        <p className={classes.Signup}>Sign Up</p>
        {/* Basket logo */}
        <span className={classes.ItemCount}>0</span>
      </div>
    </div>
  )
}

export default Header