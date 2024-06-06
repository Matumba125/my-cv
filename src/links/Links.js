import React from 'react';
import style from "./Links.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {Fade} from "react-awesome-reveal";

const Links = () => {
    return (
        <div className={style.linksContainer}>
            <h4>You can find me here:</h4>
            <div className={style.links}>
                <Fade bottom>
                    <a href="https://github.com/matumba125/">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </Fade>
                <Fade top>
                    <a href="mailto:nbenza5@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                </Fade>
                <Fade bottom>
                    <a href="https://t.me/matumba_l/">
                        <FontAwesomeIcon icon={faTelegram}/>
                    </a>
                </Fade>
                <Fade top>
                    <a href="https://www.linkedin.com/in/nick-benza-5b81ab21a/">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </Fade>
            </div>
        </div>
    );
};

export default Links;