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
            header
            <div className={s.menuItemsContainer}>
                <HeaderMenuItem/>
                <HeaderMenuItem/>
                <HeaderMenuItem/>
                <HeaderMenuItem/>
            </div>
        </header>
    )
}

export default Header;