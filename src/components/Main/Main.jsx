import React from "react";
import s from "./Main.module.css";

const Main = (props) => {
    return (
        <main>
            {props.children}
        </main>
    )
}

export default Main;