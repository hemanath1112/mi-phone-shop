import React from 'react'
import classes from './Home.module.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.HomeContent}>
        <img src="https://i03.appmifile.com/937_operator_in/17/10/2023/f8bbb21b3ebb5c98fd5a9ba1e82c8f33.jpg?f=webp" alt="" />
        <div className={classes.Content}>
          <p>Dawn of a New age Camera</p>
          <h1>XIAOMI 13 Pro</h1>
          <p className={classes.BankOffer}>Special Exchange Bonus of Up to 5,000<sup>*</sup></p>
          <p>From <span className={classes.NewPrice}>&#8377;23,999</span> <span className={classes.OldPrice}>&#8377;42,999</span></p>
          <div className={classes.Buttons}>
            <button>Buy Now</button>
            <p>Learn More <span><ChevronRightIcon/></span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home