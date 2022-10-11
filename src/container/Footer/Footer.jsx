import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          16 Nicolae Golescu street District 1,
          <br /> Bucharest, Romania
        </p>
        <p className="p__opensans">+40 751 144 545</p>
        <p className="p__opensans">caju@hadad.ro</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.caju} alt="footer_logo" />
        <p className="p__opensans">
          {/* &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot; */}
          CAJU greets its guests with an international menu, with strong
          Mediterranean influences and healthy oriented cuisine.
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
          alt="logo"
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">10:00 am - 10:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">10:00 am - 10:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Caju. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
