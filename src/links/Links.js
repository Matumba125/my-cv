import React from 'react';
import style from "./Links.module.scss";

const Links = () => {
    return (
        <div className={style.linksContainer}>
            <h4>You can find me here:</h4>
            <div className={style.links}>
                <a href="https://github.com/matumba125/" target="_blank">
                    Git
                </a>
                <a href="mailto:nbenza5@gmail.com" target="_blank">
                    Gmail
                </a>
                <a href="https://t.me/matumba_l/" target="_blank">
                    Telegram
                </a>
                <a href="https://www.linkedin.com/in/nick-benza-5b81ab21a/" target="_blank">
                    LinkedIn
                </a>
            </div>
        </div>
    );
};

export default Links;