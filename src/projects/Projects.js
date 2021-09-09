import React from "react";
import style from "./Projects.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import Project from "./project/Project";
import SectionHeader from "../common/setionHeader/SectionHeader";
import socialNetworkPreview from "../common/img/socialNetwork.jpg";
import runningAppPreview from "../common/img/runningApp.jpg";
import todolistPreview from "../common/img/todolistPreview.png";


function Projects() {

    const socialNetwork = {
        backgroundImage: `url(${socialNetworkPreview})`,
    }
    const todoList = {
        backgroundImage: `url(${todolistPreview})`,
    }
    const runningApp = {
        backgroundImage: `url(${runningAppPreview})`,
    }

    return (
        <section id={'projects'}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <SectionHeader header={'My Projects'}/>
                <div className={style.projects}>
                    <Project
                        style={socialNetwork}
                        projectName={'Social Network'}
                        description={'Developers social network. Many features still in progress. But you can use base functions of any social network'}
                        projectLink={'https://matumba125.github.io/social-network/'}/>
                    <Project
                        style={todoList}
                        projectName={'Todolist'}
                        description={'Complex project that using React-hooks, Redux, Axios and Rest API'}
                        projectLink={'https://matumba125.github.io/todolist/'}/>
                    <Project
                        style={runningApp}
                        projectName={'Running App'}
                        description={'SPA for jog tracking. Allows adding and updating jogs'}
                        projectLink={'https://matumba125.github.io/running_app_test_task/'}/>

                </div>
            </div>
        </section>
    )
}

export default Projects;