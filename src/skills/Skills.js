import React from "react";
import style from "./Skills.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import Skill from "./skill/Skill";
import SectionHeader from "../common/setionHeader/SectionHeader";
import {faCss3Alt, faGitAlt, faHtml5, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import reduxSvg from "../common/img/icons/redux_icon.svg"
import tsSvg from '../common/img/icons/typescript_icon.svg'
import background from "../common/img/skillsBack.jpg";
import restSvg from "../common/img/icons/rest-api_icon.svg";
import jestSvg from "../common/img/icons/jest_icon.svg";
import storybookSvg from "../common/img/icons/storybook_icon.svg";

function Skills() {

    const mainStyle = {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <section id={'skills'} style={mainStyle}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <SectionHeader header={'My Skills'} color={'white'}/>
                <div className={style.skills}>
                    <Skill skillName={'React'} icon={faReact}/>
                    <Skill skillName={'Redux'} svgIcon={reduxSvg}/>
                    <Skill skillName={'TypeScript'} svgIcon={tsSvg}/>
                    <Skill skillName={'JavaScript'} icon={faJs}/>
                    <Skill skillName={'HTML5'} icon={faHtml5}/>
                    <Skill skillName={'CSS3'} icon={faCss3Alt}/>
                    <Skill skillName={'Rest API'} svgIcon={restSvg}/>
                    <Skill skillName={'TDD - Jest'} svgIcon={jestSvg}/>
                    <Skill skillName={'Storybook'} svgIcon={storybookSvg}/>
                    <Skill skillName={'Git'} icon={faGitAlt}/>
                </div>
            </div>
        </section>
    )
}

export default Skills;