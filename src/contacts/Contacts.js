import React from "react";
import style from "./Contacts.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import SectionHeader from "../common/setionHeader/SectionHeader";
import Links from "../links/Links";
import background from "../common/img/contactsBack.jpg"

function Contacts() {

    const mainStyle = {
        backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat' ,
    }

    return (
        <section id={'contacts'} className={`${style.section}`} style={mainStyle}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <SectionHeader header={'Contacts'} color={'white'}/>
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
                <Links/>
            </div>
        </section>
    )
}

export default Contacts;