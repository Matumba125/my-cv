import React from "react";
import style from "./Nav.module.scss"

function Nav() {

    return (
        <nav className={style.nav}>
            <ul>
                <li className={style.navBlock}>
                    <a href="#home">Home</a>
                </li>
                <li className={style.navBlock}>
                    <a href="#main">About</a>
                </li>
                <li className={style.navBlock}>
                    <a href="#skills">Skills</a>
                </li>
                <li className={style.navBlock}>
                    <a href="#projects">Projects</a>
                </li>
                <li className={style.navBlock}>
                    <a href="#contacts">Contacts</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;