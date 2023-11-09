import React from "react";
import s from "./Logo.module.css";
import logoImg from "../../../logo.svg";

const Logo = () => {
    return (
        <div className={s.logo}><img alt={""} src={logoImg}/>LOGO</div>
    )
}

export default Logo;