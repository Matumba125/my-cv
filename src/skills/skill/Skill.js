import React from 'react';
import style from "./Skill.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                {props.icon ?
                    <FontAwesomeIcon icon={props.icon}/>
                    :
                    <img src={props.svgIcon} alt={'skillIcon'}/>
                }
            </div>
            <h3>{props.skillName}</h3>
        </div>
    );
};

export default Skill;