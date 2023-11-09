import React from "react";
import s from "./Header.module.css";
import Logo from "./Logo/Logo";
import SearchInput from "./SearchInput/SearchInput";
import HeaderMenuItem from "./HeaderMenuItem/HeaderMenuItem";

const Header = () => {
    return (
        <header>
            <div className={s.logoContainer}>
                <Logo/>
                <SearchInput/>
                <div>About us</div>
            </div>
            {/*header*/}
            <div className={s.menuItemsContainer}>
                <HeaderMenuItem>Today</HeaderMenuItem>
                <HeaderMenuItem>Hourly</HeaderMenuItem>
                <HeaderMenuItem>10 Days</HeaderMenuItem>
                <HeaderMenuItem>Monthly</HeaderMenuItem>
            </div>
        </header>
    )
}

export default Header;