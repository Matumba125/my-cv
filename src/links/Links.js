import React from 'react';
import style from "./Links.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Links = () => {
    return (
        <div className={style.linksContainer}>
            <h4>You can find me here:</h4>
            <div className={style.links}>
                <a href="https://github.com/matumba125/" target="_blank">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a href="mailto:nbenza5@gmail.com" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope}/>
                </a>
                <a href="https://t.me/matumba_l/" target="_blank">
                    <FontAwesomeIcon icon={faTelegram}/>
                </a>
                <a href="https://www.linkedin.com/in/nick-benza-5b81ab21a/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
            </div>
        </div>
    );
};

export default Links;