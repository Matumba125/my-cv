import React from "react";
import style from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css"

function Footer() {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2>Nikita Benza</h2>
                <div className={style.links}>
                    <a href="https://github.com/matumba125/" target="_blank">
                        Git
                    </a>
                    <a href="https://www.instagram.com/matumba_l/" target="_blank">
                        Insta
                    </a>
                    <a href="mailto:nbenza5@gmail.com" target="_blank">
                        Gmail
                    </a>
                    <a href="https://t.me/matumba_l/" target="_blank">
                        Telegram
                    </a>
                </div>
                <span>© 2021 All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer;