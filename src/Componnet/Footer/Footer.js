import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import classes from './Footer.module.css'
import LanguageIcon from '@mui/icons-material/Language';

const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <div className={classes.Footer}>
      <div className={classes.FooterItem}>
        <div className={classes.FooterContent}>
          <h4>Support</h4>
          <p>Online Help</p>
          <p>Customer Service</p>
          <p>Shipping FAQ</p>
          <p>Warranty</p>
          <p>Mi Exchange</p>
          <p>Bulk Orders</p>
          <p>User Guide</p>
          <p>Laptop Drivers</p>
          <p>Mi Screen Protect</p>
          <p>Mi Extended Warranty</p>
          <p>Mi Complete Protect</p>
          <p>Certification</p>
        </div>
        <div className={classes.FooterContent}>
          <h4>SHOP AND LEARN</h4>
          <p>Xiaomi Phones</p>
          <p>Redmi Phones</p>
          <p>Laptops and Tablets</p>
          <p>Tv's</p>
          <p>Audio</p>
          <p>Lifestyle</p>
          <p>Smart Home</p>
        </div>
        <div className={classes.FooterContent}>
          <h4>RETAIL STORE</h4>
          <p>Mi Home</p>
          <p>Mi Authorized Store</p>
          <p>Mi Store Franchise</p>
        </div>
        <div className={classes.FooterContent}>
          <h4>ABOUT US</h4>
          <p>Xiaomi</p>
          <p>Privacy Policy</p>
          <p>User Agreement </p>
          <p>Integrity & Compliance</p>
          <p>CSR and Disclosures</p>
          <p>E-Waste Management</p>
          <p>Trust Center</p>
          <p>Smartphone Quality</p>
          <p>Culture</p>
          <p>TV Quality</p>
          <p>Service Quality</p>
        </div>
        <div className={classes.FooterFollows}>
          <div className={classes.FooterSVG}>
            <h4>Follow Mi</h4>
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
          </div>
          <div>
            <h4>Let's stay in touch</h4>
            <input type="email" placeholder='Entere email address' />
          </div>
          <div className={classes.FooterStore}>
            <PlayArrowIcon/>
            <p>Download on Google playStore</p>
          </div>
        </div>
      </div>
      <div className={classes.FooterEnd}>
        <div  className={classes.CopyRights}>
          <p>Copyrights &copy; 2010 - {Year} <span>Hemanath</span>, All Rights Resetved</p>
          <p>Sitemam</p>
        </div>
        <div className={classes.CopyRights}>
          <p>
          India / India 
          </p>
          <LanguageIcon/>
        </div>
      </div>
    </div>
  )
}

export default Footer