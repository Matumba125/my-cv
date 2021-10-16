import React, {useState} from "react";
import style from "./Contacts.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import SectionHeader from "../common/setionHeader/SectionHeader";
import Links from "../links/Links";
import background from "../common/img/contactsBack.jpg"
import Fade from "react-reveal/Fade"
import emailjs from 'emailjs-com';


function Contacts() {

    const [status, setStatus] = useState('')

    const mainStyle = {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

    }

    const sendMail = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_7tgnzwr', 'template_f95ve1q', e.target, 'user_sZomao19LbtSUErmCiZjq')
            .then(()=> {
                    setStatus('Sended')
                    document.email_form.reset()
                    setTimeout(()=>setStatus(''), 3000)
                }
            )
    }

    return (
        <section id={'contacts'} className={`${style.section}`} style={mainStyle}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Fade top>
                    <SectionHeader header={'Contacts'} color={'white'}/>
                </Fade>
                <Fade bottom>
                    <form name={'email_form'} className={style.form} onSubmit={sendMail}>
                        <div>
                            <input type={'text'} name={'from_name'} placeholder={'Your Name'}/>
                        </div>
                        <div>
                            <input type={'email'} name={'from_email'} placeholder={'Your E-mail'}/>
                        </div>
                        <div>
                            <textarea name="message" placeholder={'Type your message'}></textarea>
                        </div>
                        {status &&
                            <div style={{color: '#eee'}}>{status}</div>
                        }
                        <div>
                            <input className={style.button} type={'submit'} value={'Send Message'}/>
                        </div>
                    </form>
                </Fade>
                <Links/>
            </div>
        </section>
    )
}

export default Contacts;