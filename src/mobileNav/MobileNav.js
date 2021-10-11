import React, {useState} from "react";
import style from "./MobileNav.module.scss"
import {Link} from "react-scroll";
import {faTimes, faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function MobileNav() {

    const [openMenu, setOpenMenu] = useState(false)

    const onButtonClick = () =>{
        setOpenMenu(!openMenu)
    }

    return (
        <nav className={style.mobileNav}>
            <div className={!openMenu ? `${style.openMenu} ${style.showOpenMenu}` : style.openMenu} onClick={onButtonClick}>
                <FontAwesomeIcon icon={faBars} className={style.icon}/>
            </div>
            <div className={openMenu ? `${style.navItems} ${style.show}`: style.navItems}>
                <div className={style.cancel} onClick={onButtonClick}>
                    <FontAwesomeIcon icon={faTimes} className={style.icon}/>
                </div>
                <li className={style.navBlock}>
                    <Link
                        activeClass={style.activeLink}
                        className={style.link}
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        onClick={onButtonClick}
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
                        onClick={onButtonClick}
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
                        onClick={onButtonClick}
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
                        onClick={onButtonClick}
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
                        onClick={onButtonClick}
                    >Contacts</Link>
                </li>
            </div>
        </nav>
    )
}

export default MobileNav;