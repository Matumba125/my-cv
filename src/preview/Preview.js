import React from 'react';
import background from "../common/img/previewBack.jpg";
import style from './Preview.module.scss'
import Fade from "react-reveal/Fade";
import {Link} from "react-scroll";




const Preview = () => {

    const mainStyle = {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        position: 'relative',
    }


    return (
        <section id={'home'} style={mainStyle}>
            <div className={style.container}>
                <Fade top>
                    <h1>I'm Nikita Benza</h1>
                    <p className={style.paragraph}>
                        <span>Creative</span>
                        <span className={style.dot}></span>
                        <span>Developer</span>
                        <span className={style.dot}></span>
                        <span>Engeneer</span>
                    </p>
                    <div className={style.btnNav}>
                        <Link
                            className={style.works}
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                        >My Works</Link>
                        <Link
                            className={style.hire}
                            to="contacts"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                        >Hire Me</Link>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default Preview;