import React from 'react'
import classes from './TvItem.module.css'

const TvItemsList = ({title, image,oldPrice,newPrice,offer,discraption}) => {
  return (
    <div>
         <div className={classes.TvItems}>
          <h1>{title}</h1>
          <p className={classes.Discraption}>{discraption}</p>
          <p>From <span className={classes.NewPrice}>&#8377;{newPrice}</span><span className={classes.OldPrice}>&#8377;{oldPrice}</span></p>
          <div className={classes.Buttons}>
            <button className={classes.BuyNow}>Buy Now</button>
            <button className={classes.LearnMore}>Learn More</button>
          </div>
          <img src={image} alt="" />
          <div className={classes.Offer}>
            <button>{offer} Off</button>
          </div>
        </div>
    </div>
  )
}

export default TvItemsList