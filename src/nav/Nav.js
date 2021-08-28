import React from "react";
import style from "./Nav.module.scss"

function Nav(){

    return(
        <div className={style.nav}>
            <div className={style.navBlock}>
                <a href="#home">Home</a>
            </div>
            <div className={style.navBlock}>
                <a href="#main">About</a>
            </div>
            <div className={style.navBlock}>
                <a href="#skills">Skills</a>
            </div>
            <div className={style.navBlock}>
                <a href="#projects">Projects</a>
            </div>
            <div className={style.navBlock}>
                <a href="#contacts">Contacts</a>
            </div>
        </div>
    )
}

export default Nav;