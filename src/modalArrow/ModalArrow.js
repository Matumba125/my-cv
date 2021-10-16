import React from 'react';
import style from './ModalArrow.module.scss'
import {IconButton} from "@mui/material";
import {Link} from "react-scroll";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ModalArrow = () => {


    document.addEventListener('scroll', () => {

        if (window.scrollY >= 300) {
            document.getElementById("arrow").className = (`${style.arrow} ${style.showArrow}`)
        } else {
            document.getElementById("arrow").className = (style.arrow)
        }
    });

    return (
        <div id={'arrow'} className={style.arrow}>
            <IconButton>
                <Link to="home"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}>
                    <KeyboardArrowUpIcon className={style.icon}/>
                </Link>
            </IconButton>
        </div>
);
};

export default ModalArrow;