import React from "react";
import s from "./Logo.module.css";
import logoImg from "../../../img/weatherIcons/static/day.svg";
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <div className={s.logo}>
            <NavLink to={"/"}>
                <img alt={""} src={logoImg}/>
                Weather
            </NavLink>
        </div>
    )
}

export default Logo;