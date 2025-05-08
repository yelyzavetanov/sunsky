import React from "react";
import s from "./Logo.module.css";
import logoImg from "../../../img/weatherIcons/static/day.svg";
import {NavLink} from "react-router-dom";
import logoIcon from "../../../img/weatherIcons/static/day.svg";

const Logo = (props) => {

    return (
        <div className={props.isBlack ? s.logoBlack : s.logo}>
            <NavLink to={"/"}>
                <img className={s.logoIcon} alt={""} src={logoIcon}/>
                <span className={s.logoText}>SunSky</span>
            </NavLink>
        </div>
    )
}

export default Logo;