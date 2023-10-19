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
          id="1"
          title="Xiaomi 13 Pro"
          image="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677241587.64975684!256x256.jpg?f=webp"
          oldPrice="89,999"
          newPrice="74,999"
          offer='16%'
          />
          <PhoneItems
           id="2"
           title="Xiaomi 12 Pro"
           image="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1650980933.40744791!256x256.jpg?f=webp"
           oldPrice="79,999"
           newPrice="39,999"
           offer='50%'
          />
          <PhoneItems
           id="3"
           title="Xiaomi 11i 5G"
           image="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1641485803.86155485!256x256.png?f=webp"
           oldPrice="31,999"
           newPrice="18,999"
           offer='10%'
          />
          <PhoneItems
           id="4"
           title="Xiaomi 11T Pro 5G"
           image="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1642499637.27736807!256x256.jpg?f=webp"
           oldPrice="49,999"
           newPrice="27,999"
           offer='44%'
          />
      </div>
      <div className={classes.PhoneRow}>
          <PhoneItems
           id="5"
           title="Redmi A2+"
           image="https://i03.appmifile.com/240_item_in/16/05/2023/6f31c5aca10d8b615c43b77f10b383ad!256x256.jpg?f=webp"
           oldPrice="11,999"
           newPrice="7,999"
           offer='32%'
          />
          <PhoneItems
           id="6"
           title="Redmi 12"
           image="https://i03.appmifile.com/581_item_in/02/08/2023/ef9bbb8eaeaa9fe5b3469acd5b1454a2!256x256.jpg?f=webp"
           oldPrice="15,999"
           newPrice="11,999"
           offer='28%'
          />
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
          <PhoneItems
           id="7"
           title="Redmi 12 Pro+ 5G"
           image="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1672740784.31939923!256x256.jpg?f=webp"
           oldPrice="33,999"
           newPrice="27,999"
           offer='17%'
          />
          <PhoneItems
           id="8"
           title="Redmi Note 12 Pro"
           image="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1672876160.50773273!256x256.jpg?f=webp"
           oldPrice="29,999"
           newPrice="21,999"
           offer='21%'
          />
          <PhoneItems
           id="9"
           title="Redmi Note 12 5G"
           image="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1672740784.31939923!256x256.jpg?f=webp"
           oldPrice="19,999"
           newPrice="15,999"
           offer='20%'
          />
      </div>
      <div className={classes.PhoneRow}>
          <PhoneItems
           id="10"
           title="Redmi 12C"
           image="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1680030998.0464825!256x256.jpg?f=webp"
           oldPrice="13,999"
           newPrice="6,999"
           offer='50%'
          />
          <PhoneItems
           id="11"
           title="Redmi Note 12"
           image="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1680028893.42691134!256x256.jpg?f=webp"
           oldPrice="18,999"
           newPrice="11,999"
           offer='36%'
          />
          <PhoneItems
           id="12"
           title="Redmi A2"
           image="https://i03.appmifile.com/334_item_in/03/06/2023/52c652fe50e7d5aa9ab464b2cdd50c5b!256x256.jpg?f=webp"
           oldPrice="9,999"
           newPrice="6,999"
           offer='38%'
          />
          <PhoneItems
           id="13"
           title="Redmi 12 5G"
           image="https://i03.appmifile.com/231_item_in/02/08/2023/fc70c4dcd378dadd8f0758172f9f9d92!256x256.jpg?f=webp"
           oldPrice="15,999"
           newPrice="11,999"
           offer='25%'
          />
      </div>
    </div>
  )
}

export default Phone