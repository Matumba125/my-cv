import React from "react";
import style from "./Contacts.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import SectionHeader from "../common/setionHeader/SectionHeader";
import Links from "../links/Links";
import background from "../common/img/contactsBack.jpg"
import Fade from "react-reveal/Fade";


function Contacts() {

    const mainStyle = {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

    }

    return (
        <section id={'contacts'} className={`${style.section}`} style={mainStyle}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Fade top>
                    <SectionHeader header={'Contacts'} color={'white'}/>
                </Fade>
                <Fade bottom>
                    <form className={style.form}>
                        <div>
                            <input placeholder={'Your Name'}/>
                        </div>
                        <div>
                            <input placeholder={'Your E-mail'}/>
                        </div>
                        <div>
                            <textarea name="text" placeholder={'Type your message'}></textarea>
                        </div>
                        <div>
                            <button type={'submit'}>Send Message</button>
                        </div>
                    </form>
                </Fade>
                <Links/>
            </div>
        </section>
    )
}

export default Contacts;