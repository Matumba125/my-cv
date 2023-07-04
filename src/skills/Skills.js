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
import jiraSvg from "../common/img/icons/jira_icon.svg";
import reactQuerySvg from "../common/img/icons/react_query_icon.svg"
import stripeSvg from "../common/img/icons/stripe_icon.svg"
import websocketSvg from "../common/img/icons/websocket_icon.svg"
import amplitudeSvg from "../common/img/icons/amplitude_icon.svg"
import muiSvg from "../common/img/icons/mui_icon.svg"
import Fade from "react-reveal/Fade";

function Skills() {

    const mainStyle = {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    const skills = [
        {
            skill: 'React',
            icon: faReact,
        },
        {
            skill: 'Redux',
            svg: reduxSvg
        },
        {
            skill: 'TypeScript',
            svg: tsSvg
        },
        {
            skill: 'JavaScript',
            icon: faJs,
        },
        {
            skill: 'HTML5',
            icon: faHtml5,
        },
        {
            skill: 'CSS3',
            icon: faCss3Alt,
        },
        {
            skill: 'MUI',
            svg: muiSvg,
        },
        {
            skill: 'Rest API',
            svg: restSvg,
        },
        {
            skill: 'React Query',
            svg: reactQuerySvg
        },
        {
            skill: 'Websocket',
            svg: websocketSvg
        },
        {
            skill: 'Stripe Integration',
            svg: stripeSvg
        },
        {
            skill: 'TDD - Jest',
            svg: jestSvg,
        },
        {
            skill: 'Storybook',
            svg: storybookSvg
        },
        {
            skill: 'Git',
            icon: faGitAlt
        },
        {
            skill: 'Jira',
            svg: jiraSvg
        },
        {
            skill: 'Amplitude',
            svg: amplitudeSvg
        },

    ]

    return (
        <section id={'skills'} style={mainStyle}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Fade top>
                    <SectionHeader header={'My Skills'} color={'white'}/>
                </Fade>

                <div className={style.skills}>
                        {
                            skills.map(m =>
                                <Fade bottom><Skill skillName={m.skill} icon={m.icon} svgIcon={m.svg} /></Fade>
                            )
                        }
                    </div>
            </div>
        </section>
    )
}

export default Skills;