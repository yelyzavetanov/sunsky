import React from "react";
import s from "./HeaderMenuItem.module.css";

const HeaderMenuItem = (props) => {
    return (
        <div className={s.item}>{props.children}</div>
    )
}

export default HeaderMenuItem;