import React from 'react'
import classes from './Header.module.css'
import { Link, NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {


  const ActiveClass = (isActive)=> isActive ? classes.active:undefined;


  return (
    <div className={classes.Header}>
      <div className={classes.LeftHeader}> 
        <Link to={'/'} >
          <div className={classes.Logo}>
            <h1>MI</h1>
          </div>
        </Link>
         
        <NavLink to={'/phone'}>
          <p className={ActiveClass}>Phones</p>
        </NavLink>

        <Link to={'/tv'}>
          <p>Tv's</p>
        </Link>
         
      </div>
      <div className={classes.RightHeader}>

        <div className={classes.search}> 
          <input type="text" />
          <SearchIcon/>
        </div>

        <Link to={'/sign'}>
          <p className={classes.Signup}><PersonIcon/><span>Sign up</span></p>
        </Link>


        <Link to={'/cart'}>
          <div className={classes.Cart}>
            <LocalMallIcon/> 
            <span>0</span>
          </div>
        </Link>
        
      
      </div>
    </div>
  )
}

export default Header