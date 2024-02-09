import React from "react";
import s from "./Footer.module.css";
import SocialMediaIcons from "../Common/SocialMediaIcons/SocialMediaIcons";

const Footer = () => {
    return (
        <footer>
            {/*footer*/}
            <SocialMediaIcons/>
            <div><a href={"#header"}>To top</a></div>
            <div><a href="https://lordicon.com/">Icons by Lordicon.com</a></div>
            <div>
                <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">
                    Facebook icons created by Freepik - Flaticon
                </a>
            </div>
            <div>Yelyzaveta N from VNTU</div>
        </footer>
    )
}

export default Footer;