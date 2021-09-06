import React from 'react';
import background from "../common/img/previewBack.jpg";
import style from './Preview.module.scss'

const Preview = () => {

    const mainStyle = {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
    }


    return (
        <section id={'home'} style={mainStyle}>
            <div className={style.container}>
                <h1>I'm Nikita Benza</h1>
                <p>
                    Creative
                    <span className={style.dot}></span>
                    Developer
                    <span className={style.dot}></span>
                    Engeneer
                </p>
                <div className={style.btnNav}>
                    <a href={'#projects'} className={style.works}>My Works</a>
                    <a href={'#contacts'} className={style.hire}>Hire Me</a>
                </div>
            </div>
        </section>
    );
};

export default Preview;