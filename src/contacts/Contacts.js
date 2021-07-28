import React from "react";
import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css"

function Contacts() {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2>Contacts</h2>
                <form className={style.form}>
                    <input/>
                    <input/>
                    <textarea name="text"></textarea>
                </form>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Contacts;