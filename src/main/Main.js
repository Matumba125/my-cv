import React from "react";
import style from "./Main.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import avatar from "../common/img/avatar.jpg"
import SectionHeader from "../common/setionHeader/SectionHeader";
import {Fade} from "react-awesome-reveal";


function Main() {

    function calculateAge() {
        var ageDifMs = Date.now() - new Date(2000, 5, 30)
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    return (
        <section id={'main'} className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.aboutContainer}`}>
                <div className={style.aboutHeader}>
                    <Fade top>
                        <div className={style.myPhoto}>
                            <img src={avatar} alt="avatar"/>
                        </div>
                    </Fade>
                    <SectionHeader header={'Nikita Benza'} withoutMargin={true}/>
                    <p>Front-end Developer</p>
                </div>
                <div className={style.aboutMain}>
                    <Fade right>
                        <div className={style.personalInfo}>
                            <div className={style.header}>
                                <h3 className={style.title}>Personal Info</h3>
                                <div className={style.separator}></div>
                            </div>
                            <p>Name: Nikita Benza</p>
                            <p>Age: {calculateAge()}</p>
                            <p>Location: Minsk, Belarus</p>
                            <a href={'mailto:nik.benza000@gmail.com'}>E-mail: nik.benza000@gmail.com</a>
                            <p>Phone: +375297412510</p>

                        </div>
                    </Fade>
                    <Fade left>
                        <div className={style.aboutMe}>
                            <SectionHeader header={'About Me'} itemHeader={true}/>
                            <div>
                                <p>Hello, I am enthusiastic team player
                                    focused on personal growth.</p>
                                <p>I have experience in creating SPA based on
                                    React/Redux/TypeScript.</p>
                                <p>Now I am improving my skills in this direction
                                    and expanding them with new technologies.</p>
                                <p>My next goals is to learn
                                    Next.js and Node.js.</p>
                            </div>
                        </div>
                    </Fade>

                </div>
            </div>
        </section>
    )
}

export default Main;