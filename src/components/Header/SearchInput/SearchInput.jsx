import React from "react";
import s from "./SearchInput.module.css";
import searchIcon from "../../../img/icon/search02.svg";

const SearchInput = () => {
    return (
        <div className={s.searchInputContainer}><input placeholder={"Your city..."}/><img alt={""} src={searchIcon}/></div>
    )
}

export default SearchInput;