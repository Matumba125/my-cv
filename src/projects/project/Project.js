import React, {useState} from 'react';
import style from "./Project.module.css"
import SectionHeader from "../../common/setionHeader/SectionHeader";

function Project(props) {

    const [focused, setFocused] = useState(false)

    return (
        <div className={style.project}>
            <div className={style.description}>
                {focused ?
                    <a href={props.projectLink}
                       className={style.previewWrapper}
                       style={props.style}
                       onMouseOut={() => setFocused(false)}
                    >
                        <h4>Check this out</h4>
                    </a>:
                    <a
                        href={props.projectLink}
                        className={style.preview}
                        style={props.style}
                        onMouseOver={() => setFocused(true)}
                    >
                    </a>
                }
                <SectionHeader header={props.projectName} itemHeader={true}/>
                <span>
                {props.description}
            </span>
            </div>
        </div>
    );
};

export default Project;