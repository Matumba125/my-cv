import React from "react";
import style from "./Main.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import avatar from "../common/img/avatar.jpg"

function Main() {
    return (
        <section id={'main'} className={style.mainBlock}>
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
        </section>
    )
}

export default Main;