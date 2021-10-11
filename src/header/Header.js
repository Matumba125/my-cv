import React from "react";
import style from "./Header.module.scss"
import Nav from "../nav/Nav";
import MobileNav from "../mobileNav/MobileNav";

function Header() {

    document.addEventListener('scroll', ()=> {

            if (window.scrollY >= 400) {
                document.getElementById("head").className=(style.header)
            } else {
                document.getElementById("head").className=(`${style.header} ${style.transparentHeader}`)
            }
    });

    return (
        <div id={'head'} className={style.header}>
            <Nav/>
            <MobileNav/>
        </div>
    )
}

export default Header;