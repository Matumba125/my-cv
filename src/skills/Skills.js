import React from "react";
import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skills}>
                    <Skill skillName={'JS'} description={'blabla'}/>
                    <Skill skillName={'CSS'} description={'blabla'}/>
                    <Skill skillName={'React'} description={'blablablablalbla'}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;