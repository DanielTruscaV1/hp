import React from 'react';
import FooterStyle from "./FooterStyle.module.css";

const Footer = () => {
  return (
    <div className={FooterStyle.container}>
        <div className={FooterStyle.container2}>
            <ul className={FooterStyle.list}>
                <li className={FooterStyle.listElement}>About Us</li>
                <li className={FooterStyle.listElement}>Privacy Settings</li>
                <li className={FooterStyle.listElement}>Press</li>
            </ul>
            <ul className={FooterStyle.list}>
                <li className={FooterStyle.listElement}>FAQs</li>
                <li className={FooterStyle.listElement}>Terms &#38; Conditions</li>
                <li className={FooterStyle.listElement}>Ad Choices</li>
            </ul>
            <ul className={FooterStyle.list}>
                <li className={FooterStyle.listElement}>Privacy &#38; Cookies</li>
                <li className={FooterStyle.listElement}>Children's Privacy Policy</li>
                <li className={FooterStyle.listElement}>Legals</li>
            </ul>
            <hr className={FooterStyle.line}/>
            <p className={FooterStyle.text}>
                © WIZARDING PLANET DIGITAL 2022
            </p>
            <p className={FooterStyle.text}>
                Looking for Pottermore? Wizarding Planet is the new official home of Harry Potter &#38; Fantastic Beasts. Join the Fan Club and bring your traits with you.
            </p>
            <p className={FooterStyle.text}>
                Brought to you by Wizarding Planet Digital, a partnership between Warner Bros. and Pottermore. Delivering the latest news and official products from the Wizarding World and our partners.
            </p>
            <p className={FooterStyle.text}>
                TM &#38; © WBEI. WIZARDING PLANET Publishing and Theatrical Stage Rights © J.K. Rowling.
            </p>
            <a href="#" className="fa fa-youtube"></a>
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-instagram"></a>
            <a href="#" className="fa fa-twitter"></a>
        </div>
    </div>
  )
}

export default Footer;