import React from "react";
import s from "./HeaderMenuItem.module.css";
import {NavLink} from "react-router-dom";

const HeaderMenuItem = (props) => {
    return (
        <NavLink to={props.path} className={({isActive}) => isActive ? s.selectedItem : s.item}>
            {props.children}
        </NavLink>
    )
}

export default HeaderMenuItem;