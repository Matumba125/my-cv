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
                    <Project
                        skillName={'Social Network'}
                        description={'network'}
                        projectLink={'https://preview.themeforest.net/item/jeffrey-personal-portfolio-template/full_screen_preview/24187700?_ga=2.18315711.763890385.1563976908-1245260935.1563976797'}/>
                    <Project skillName={'Todolist'}
                             description={'list'}
                             projectLink={'https://matumba125.github.io/todolist/'}/>

                </div>
            </div>
        </div>
    )
}

export default Projects;