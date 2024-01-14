import React from "react";
import s from "./Header.module.css";
import Logo from "./Logo/Logo";
import SearchInput from "./SearchInput/SearchInput";
import HeaderMenuItem from "./HeaderMenuItem/HeaderMenuItem";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header id={"header"}>
            <div className={s.logoContainer}>
                <Logo/>
                <SearchInput/>
                <div className={s.headerLink}>
                    <NavLink to={"/aboutUs"} className={({isActive}) => isActive ? s.selectedLink : s.link}>
                        AboutUs
                    </NavLink>
                </div>

            </div>
            <div className={s.menuItemsContainer}>
                <HeaderMenuItem path={"/"}>Today</HeaderMenuItem>
                <HeaderMenuItem path={"/hourlyWeather"}>Hourly</HeaderMenuItem>
                <HeaderMenuItem path={"/tenDaysWeather"}>10 Days</HeaderMenuItem>
                <HeaderMenuItem path={"/monthlyWeather"}>Monthly</HeaderMenuItem>
            </div>
        </header>
    )
}

export default Header;