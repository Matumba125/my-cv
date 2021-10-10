import React from 'react';
import background from "../common/img/previewBack.jpg";
import style from './Preview.module.scss'
import Fade from "react-reveal/Fade";

// const particlesOpt= {
//     "particles": {
//         "number":{
//             "value":150,
//             "density":{
//                 "enable": true,
//                 "value_area": 800
//             }
//         }
//     }
// }

const Preview = () => {

    const mainStyle = {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        position: 'relative',
    }


    return (
        <section id={'home'} style={mainStyle}>
            {/*<Particles className={style.particles} params={particlesOpt}/>*/}
            <div className={style.container}>
                <Fade bottom>
                    <h1>I'm Nikita Benza</h1>
                    <p className={style.paragraph}>
                        <span>Creative</span>
                        <span className={style.dot}></span>
                        <span>Developer</span>
                        <span className={style.dot}></span>
                        <span>Engeneer</span>
                    </p>
                    <div className={style.btnNav}>
                        <a href={'#projects'} className={style.works}>My Works</a>
                        <a href={'#contacts'} className={style.hire}>Hire Me</a>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default Preview;