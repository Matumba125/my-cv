import React from "react";
import style from "./Main.module.css"
import styleContainer from "../common/styles/Container.module.css"
import avatar from "../common/img/avatar.jpg"

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Nikita Benza</h1>
                    <p>Front-end Developer</p>
                </div>
                <div className={style.mainPhoto}>
                    <img src={avatar} alt="avatar"/>
                </div>
            </div>
        </div>
    )
}

export default Main;