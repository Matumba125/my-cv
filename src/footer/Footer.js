import React from "react";
import style from "./Footer.module.scss"

function Footer() {

    const date = new Date()

    return (
        <div className={style.footer}>
            <span>© 2021 - {date.getFullYear()} All rights reserved</span>
        </div>
    )
}

export default Footer;