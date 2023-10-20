import React from 'react'
import classes from './TvItem.module.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TvItemsList from './TvItemsList';

const TvItem = () => {
  return (
    <div className={classes.Tv}>
       <div className={classes.TopImage}>
        <img src="https://i03.appmifile.com/415_operator_in/18/10/2023/1ef541704ae552603bccf374c92236a0.jpg?f=webp" alt="" />
        <div className={classes.TopImageDetails}>
          <h3>4K. Your New Resolution.</h3>
          <h1>XIAOMI Smart TV X Series</h1>
          <p className={classes.BankOffer}>Up to &#8377;2,750 <sup>*</sup> Bank Offer</p>
          <p >From <span className={classes.NewPrice}>&#8377;23,999</span> <span className={classes.OldPrice}>&#8377;42,999</span></p>
          <div className={classes.Buttons}>
            <button>Buy Now</button>
            <p>Learn More <span><ChevronRightIcon/></span></p>
          </div>
        </div>
      </div>

      <div className={classes.PhoneRow}>
        <TvItemsList
          id='1'
          title="Xiaomi Smart TV A 32 | 10% off with"
          image="https://i03.appmifile.com/638_item_in/06/10/2023/e848fc5911f17a0388261beba2dac796!256x256.jpg?f=webp"
          discraption='Lowest Price Ever'
          newPrice="24,999"
          oldPrice="34,999"
          offer="24%"
        />
         <TvItemsList
          id='2'
          title="Redmi Smart Fire TV(80Cm) 32inch"
          image="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1678952224.96785690!256x256.jpg?f=webp"
          discraption=' Premium Metal Bezel-less Design'
          newPrice="9,999"
          oldPrice="24,999"
          offer="60%"
        />
         <TvItemsList
          id='3'
          title="Xiaomi Smart TV 5A Pro 32"
          image="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1660640971.88075342!256x256.jpg?f=webp"
          discraption='Lowest Price Ever | 10% off with Bank Offer'
          newPrice="12,999"
          oldPrice="25,999"
          offer="24%"
        />
      </div>
      <div className={classes.PhoneRow}>
        <TvItemsList
          id='4'
          title="Xiaomi Smart TV X50 2023 Edition"
          image="https://i03.appmifile.com/592_item_in/04/08/2023/f292eae10c29ca39ad756bff57394d55!256x256.png?f=webpp"
          discraption='4K Dolby Vision | 30W Dolby Audio
          First Time on Discount'
          newPrice="30,999"
          oldPrice="44,999"
          offer="31%"
        />
         <TvItemsList
          id='5'
          title="Xiaomi OLED Vision TV 55"
          image="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1650976094.42847806!256x256.jpg?f=webp"
          discraption='
          4K OLED | IMAX Enhanced'
          newPrice="9,999"
          oldPrice="24,999"
          offer="60%"
        />
      </div>
    </div>
  )
}

export default TvItem