import React from "react";
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram } from "react-icons/ti";
import Style from "../footer/footer.css";


const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          
          <p>&copy;{new Date().getFullYear()} Tous droits reservés|Privé</p>
          <div className={Style.footer_social}>
            <a href="#/"><TiSocialFacebook/></a>
            <a href="#/"><TiSocialLinkedin/></a>
            <a href="#/"><TiSocialTwitter/></a>
            <a href="#/"><TiSocialInstagram/></a>
            <a href="#/"><TiSocialYoutube/></a>
          </div>
        </div>
      </div>
    </div>
);
};

export default Footer;
