import React from "react";
import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css"
import SectionHeader from "../common/setionHeader/SectionHeader";

function Contacts() {
    return (
        <section className={` ${style.mainBlock} ${style.section}`} >
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
            </div>
        </section>
    )
}

export default Contacts;