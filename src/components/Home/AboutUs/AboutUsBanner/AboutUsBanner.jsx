import React from "react";
import s from "./AboutUsBanner.module.css";
import logoIcon from "../../../../img/weatherIcons/static/day.svg";
import Logo from "../../../Header/Logo/Logo";

function AboutUsBanner () {
    return (
        <div className={s.banner}>
            <div className={s.bannerShadow}>
                <div className={s.bigLogo}>
                    <Logo/>
                    <span className={s.bannerTagline}>{" - "}Your trusted weather randomizer</span>
                </div>
                <div className={s.bannerBottomText}>
                    Since May 2025.
                </div>
                <div className={s.bannerInfo}>
                    Your trusted source for precise weather forecasts.<br/><br/>
                    {/*Get detailed, location-specific updates on temperature, precipitation,*/}
                    {/*and wind speed effortlessly.<br/><br/>*/}
                    {/*With intuitive design and expert insights,*/}
                    {/*stay ahead of the weather with ease.*/}
                </div>
            </div>
        </div>
    )
}

export default AboutUsBanner;