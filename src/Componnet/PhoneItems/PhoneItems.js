import React from 'react'
import classes from './Phone.module.css'

const PhoneItems = () => {
  return (
    <div>
        <div className={classes.PhoneItems}>
          <h1>Xiaomi 13 Pro</h1>
          <p>From <span className={classes.NewPrice}>&#8377;74,999</span><span className={classes.OldPrice}>&#8377;89,999</span></p>
          <div className={classes.Buttons}>
            <button className={classes.BuyNow}>Buy Now</button>
            <button className={classes.LearnMore}>Learn More</button>
          </div>
          <img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677241587.64975684!256x256.jpg?f=webp" alt="" />
          <div className={classes.Offer}>
            <button>16% Off</button>
          </div>
        </div>
    </div>
  )
}

export default PhoneItems