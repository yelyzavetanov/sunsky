import React from "react";
import s from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";
import catImg from "../../img/forSidebar/cat01.jpg";
import teaImg from "../../img/forSidebar/tea01.png";

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            {/*sidebar*/}
            <SidebarItem imgUrl={catImg} itemInfo={"Just look at this cat!.."}/>
            <SidebarItem imgUrl={teaImg} itemInfo={"Just look at this tea!.."}/>
        </div>
    )
}

export default Sidebar;