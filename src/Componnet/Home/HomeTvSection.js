import React from 'react'
import classes from './Home.module.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom'


const HomeTvSection = () => {
  return (
    <div className={classes.HomeTvImages}>
        <div className={classes.HomeTvFirstRow}>
            <h1>Redmi & Xiaomi Tv series</h1>
            <p>Be A Class Apart</p>
        </div>
        <div className={classes.HomeSecontRow}>
            <div className={classes.HomeTvImageRow}>
                <div className={classes.HomeTvImageRowOne}>
                    <div className={classes.img}>
                        <p>60% off</p>
                        <img src="https://i03.appmifile.com/428_item_in/06/10/2023/d5f9c34e48a37c25b576ea32759451a2.jpg?width=400&height=400" alt="" />
                        <h6>Xiaomi Smart TV X 43</h6>
                    
                    </div>
                    <div className={classes.img}>
                        <p>22% off</p>
                        <img src="https://i03.appmifile.com/267_item_in/06/10/2023/c113229a0876533438471e561949d81f.jpg?width=400&height=400" alt="" />
                        <h6>Redmi Smart Fire TV 4K</h6>
                        

                    </div>
                    <div className={classes.img}>
                        <p>48% off</p>
                        <img src="https://i03.appmifile.com/931_item_in/06/10/2023/6f89a7bf39ac6d69830916b61567b57e.jpg?width=400&height=400" alt="" />
                        <h6>Redmi Smart TV 32 HD</h6>

                    </div>
                </div>
                <div className={classes.HomeTvImageRowOne}>
                    <div className={classes.img}>
                        <p>32% off</p>
                        <img src="https://i03.appmifile.com/845_item_in/06/10/2023/da9190e11b24da928bbb6059f7a1ef90.jpg?width=400&height=400" alt="" />
                        <h6>Xiaomi Smart TV X Pro</h6>

                    </div>
                    <div className={classes.img}>
                        <p>50% off</p>
                        <img src="https://i03.appmifile.com/759_item_in/15/05/2023/e9358b342af909111527c09728d4999a.jpg?width=400&height=400" alt="" />
                        <h6>Redmi Smart TV X65</h6>

                    </div>
                    <div className={classes.img}>
                        <p>20% off</p>
                        <img src="https://i03.appmifile.com/221_item_in/06/10/2023/227c990c57ec7eb8ad960d00cb7f9d0c.jpg?width=400&height=400" alt="" />
                        <h6>Redmi Smart TV X43 108</h6>
                    </div>
                </div>
            </div>
            <div>
                <Link to={'/tv'}>
                <h2 className={classes.ShowMore}>Show More <span><ChevronRightIcon/></span></h2>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default HomeTvSection