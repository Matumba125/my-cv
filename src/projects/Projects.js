import React from "react";
import style from "./Projects.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Project from "./project/Project";


function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project skillName={'Social Network'} description={'network'}/>
                    <Project skillName={'Todolist'} description={'list'}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;