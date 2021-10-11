import React from "react";
import style from "./Nav.module.scss"
import {Link} from "react-scroll";

function Nav() {

    return (
        <nav className={style.nav}>
            <ul>
                <li className={style.navBlock}>
                    <Link
                        activeClass={style.activeLink}
                        className={style.link}
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >Home</Link>
                </li>
                <li className={style.navBlock}>
                    <Link
                        activeClass={style.activeLink}
                        className={style.link}
                        to="main"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >About</Link>
                </li>
                <li className={style.navBlock}>
                    <Link
                        activeClass={style.activeLink}
                        className={style.link}
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >Skills</Link>
                </li>
                <li className={style.navBlock}>
                    <Link
                        activeClass={style.activeLink}
                        className={style.link}
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >Projects</Link>
                </li>
                <li className={style.navBlock}>
                    <Link
                        activeClass={style.activeLink}
                        className={style.link}
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >Contacts</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;