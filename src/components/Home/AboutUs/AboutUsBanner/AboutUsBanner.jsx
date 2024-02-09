import React from "react";
import s from "./AboutUsBanner.module.css";
import logoIcon from "../../../../img/weatherIcons/static/day.svg";
import Logo from "../../../Header/Logo/Logo";

function AboutUsBanner () {
    return (
        <div className={s.banner}>
            <div className={s.bannerShadow}>
                <div className={s.bigLogo}>
                    {/*<img className={s.logoIcon} alt={""} src={logoIcon}/>*/}
                    {/*<span className={s.logoText}>SunSky</span>*/}
                    <Logo/>
                    <span className={s.bannerTagline}>{" - "}know your weather.</span>
                </div>
                <div className={s.bannerBottomText}>
                    Started since November 2023.
                </div>
                <div className={s.bannerInfo}>
                    Your trusted source for precise weather forecasts.<br/>
                    Get detailed, location-specific updates on temperature, precipitation,
                    and wind speed effortlessly.<br/>
                    With intuitive design and expert insights,
                    stay ahead of the weather with ease.
                </div>
            </div>
        </div>
    )
}

export default AboutUsBanner;