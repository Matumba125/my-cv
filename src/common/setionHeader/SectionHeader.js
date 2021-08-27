import React from 'react';
import style from './SectionHeader.module.scss';

const SectionHeader = (props) => {

    return (
    props.itemHeader ?
                <div className={style.itemHeader}>
                    <h3 className={style.itemTitle}>{props.header}</h3>
                    <div className={style.itemSeparator}></div>
                </div>
                :
                <div className={style.header}>
                    <h2 className={props.color === 'white' ? style.whiteTitle : style.title}>{props.header}</h2>
                    <div className={style.separator}></div>
                </div>
    );
};

export default SectionHeader;