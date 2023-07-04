import React, {useState} from 'react';
import style from "./Project.module.scss"
import SectionHeader from "../../common/setionHeader/SectionHeader";

function Project(props) {

    const [focused, setFocused] = useState(false)

    return (
        <div className={style.project}>
            <div className={style.description}>

                <a target={"_blank"} href={props.projectLink} rel="noreferrer"
                   className={focused ? style.previewWrapper : style.preview}
                   style={props.style}
                   onMouseOut={() => setFocused(false)}
                   onMouseOver={() => setFocused(true)}
                >
                    {focused ? <h4 className={style.header}>View</h4> : ''}
                </a>

                <SectionHeader header={props.projectName} itemHeader={true}/>
                <span>
                {props.description}
            </span>
            </div>
        </div>
    );
};

export default Project;