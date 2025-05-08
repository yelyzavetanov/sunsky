import React from "react";
import s from "./AboutUs.module.css";
import logoIcon from "../../../img/weatherIcons/static/day.svg";
import SocialMediaIcons from "../../Common/SocialMediaIcons/SocialMediaIcons";
import AboutUsBanner from "./AboutUsBanner/AboutUsBanner";

const AboutUs = () => {
    return (
        <div className={s.aboutUs}>
            <div className={s.title}>About us</div>
            <AboutUsBanner/>
            <div className={s.mainInfo}>
                This is a test project, made by a student of vntu. We have no team, no office and no customers.
                We are just doing what we want to.
                <br/><br/>
                Here is some information about weather
                <br/><br/>
                Weather is the ever-changing atmospheric conditions that encompass elements such as temperature,
                precipitation, humidity, wind speed, and atmospheric pressure. It plays a crucial role in shaping
                our daily activities, influencing everything from outdoor plans to agricultural practices.
                Understanding and predicting weather patterns is vital for ensuring safety, planning events,
                and managing various sectors like transportation, agriculture, and energy production.
                Weather impacts us all, making it a fascinating and essential aspect of our lives.
                <br/><br/>
                <div className={s.contactUsText}>Contact us:</div>
                <SocialMediaIcons/>
            </div>
        </div>
    )
}

export default AboutUs;