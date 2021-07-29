import React from 'react';
import style from "./Project.module.css"

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.preview}>
                <a href={props.projectLink} className={style.button}>View</a>
            </div>
            <h3>{props.skillName}</h3>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    );
};

export default Project;