import React from "react";
import s from './App.module.css';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className={s.App}>
                <Header/>
                <Main>
                    <Home/>
                    <Sidebar/>
                </Main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;