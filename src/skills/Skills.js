import React from "react";
import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./skill/Skill";
import SectionHeader from "../common/setionHeader/SectionHeader";


function Skills() {
    return (
        <section>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <SectionHeader header={'My Skills'}/>
                <div className={style.skills}>
                    <Skill skillName={'JS'} description={'blabla'}/>
                    <Skill skillName={'CSS'} description={'blabla'}/>
                    <Skill skillName={'React'} description={'blablablablalbla'}/>
                </div>
            </div>
        </section>
    )
}

export default Skills;