import React from "react";
import s from "./SidebarItem.module.css";

const SidebarItem = (props) => {
    return (
        <div className={s.sidebarItem}>
            <img alt={""} src={props.imgUrl}/>
            <div className={s.itemInfo}>{props.itemInfo} Learn more</div>
        </div>
    )
}

export default SidebarItem;