import React from 'react'
import classes from './Phone.module.css'
import PhoneItems from './PhoneItems'



const Phone = () => {
  return (
    <div className={classes.Phones}>
      <div className={classes.TopImage}>
        <img src="https://i03.appmifile.com/51_operator_in/16/10/2023/ede512ffedb30faba0052a103e7a8876.jpg?f=webp" alt="" />
        <div className={classes.TopImageDetails}>
          <h1>Redmi Note 12 Pro 5G</h1>
          <p>From <span className={classes.NewPrice}>&#8377; 15,999</span> <span className={classes.OldPrice}>&#8377;19,999</span></p>
          <div className={classes.Buttons}>
            <button>Buy Now</button>
            <p>Learn More</p>
          </div>
        </div>

      </div>
      <div className={classes.PhoneRow}>
          <PhoneItems
          id={1}
          titile={}
          />
          <PhoneItems/>
          <PhoneItems/>
          <PhoneItems/>
      </div>
      <div className={classes.PhoneRow}>
          <PhoneItems/>
          <PhoneItems/>
      </div>
      <div className={classes.TopImage}>
        <img src="https://i03.appmifile.com/71_operator_in/17/10/2023/5d6f93fca6482d9f83fc17a6ff24f1f0.jpg?f=webp" alt="" />
        <div className={classes.TopImageDetails}>
          <h1>Redmi Note 12 Pro 5G</h1>
          <p>From <span className={classes.NewPrice}>&#8377; 18,999</span> <span className={classes.OldPrice}>&#8377;22,999</span></p>
          <div className={classes.Buttons}>
            <button>Buy Now</button>
            <p>Learn More</p>
          </div>
        </div>

      </div>
      <div className={classes.PhoneRow}>
          <PhoneItems/>
          <PhoneItems/>
          <PhoneItems/>
      </div>
      <div className={classes.PhoneRow}>
          <PhoneItems/>
          <PhoneItems/>
          <PhoneItems/>
          <PhoneItems/>
      </div>
    </div>
  )
}

export default Phone