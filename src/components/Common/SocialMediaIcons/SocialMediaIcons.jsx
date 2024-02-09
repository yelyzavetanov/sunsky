import React from "react";
import s from "./SocialMeidaIcons.module.css";
import facebookIcon from "../../../img/socialMediaIcons/circle/facebook.png";
import linkedinIcon from "../../../img/socialMediaIcons/circle/linkedin.png";
import instagramIcon from "../../../img/socialMediaIcons/circle/instagram.png";
import twitterIcon from "../../../img/socialMediaIcons/circle/twitter.png";

function SocialMediaIcons() {
    return (
        <div className={s.socialMediaIconsContainer}>
            <div className={s.facebookContainer}>
                <a href={"https://www.facebook.com/"}>
                    <img className={s.socialMediaIcon} alt={""} src={facebookIcon}/>
                </a>
            </div>
            <div className={s.linkedinContainer}>
                <a href={"https://www.linkedin.com/"}>
                    <img className={s.socialMediaIcon} alt={""} src={linkedinIcon}/>
                </a>
            </div>
            <div className={s.instagramContainer}>
                <a href={"https://www.instagram.com/"}>
                    <img className={s.socialMediaIcon} alt={""} src={instagramIcon}/>
                </a>
            </div>
            <div className={s.twitterContainer}>
                <a href={"https://twitter.com/"}>
                    <img className={s.socialMediaIcon} alt={""} src={twitterIcon}/>
                </a>
            </div>
        </div>
    )
}

export default SocialMediaIcons;