import React from "react";
import s from "./Footer.module.css";
import SocialMediaIcons from "../Common/SocialMediaIcons/SocialMediaIcons";
import Logo from "../Header/Logo/Logo";

const Footer = () => {
    return (
        <footer>
            <div className={s.footerColumns}>
                <div>
                    <div className={s.footerLogo}>
                        <Logo isBlack={true}/>
                        <span className={s.tagLine}>{"  -  "}your trusted weather randomizer</span>
                    </div>
                    <div className={s.footerItem}>Made by Yelyzaveta N from VNTU</div>
                    <div className={s.footerItem}>Contacts:</div>
                    <div className={s.contactsContainer}>
                        <SocialMediaIcons/>
                    </div>
                </div>
                <div>
                    <div className={s.footerItem}><a href="https://lordicon.com/">Icons by Lordicon.com</a></div>
                    <div className={s.footerItem}>
                        <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">
                            Facebook icons created by Freepik - Flaticon
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;