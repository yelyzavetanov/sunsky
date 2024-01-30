import React from "react";
import s from "./PageNotFound.module.css";

function PageNotFound() {
    return (
        <div className={s.pageNotFound}>
            <div className={s.title}>Something went wrong</div>
            <div className={s.errorMessage}>
                Error 404. Page not found.
            </div>
        </div>
    )
}

export default PageNotFound;