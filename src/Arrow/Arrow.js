import React from 'react'
import styles from "./Arrow.module.scss"
import {Link } from "react-router-dom";


function Arrow(props) {
    return (
        <div className={styles.Arrow} style={props.customStyles}>

        <h4>{props.h4}</h4>
        <Link to={props.to}><img src="/images/shared/desktop/arrow.svg" alt="Arrow"/></Link>

            
        </div>
    )
}

export default Arrow
// <div className={styles.Arrow} style={{justifyContent: props.jc, borderTopStyle: props.border, display: props.display}}>
