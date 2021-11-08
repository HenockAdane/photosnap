import React from 'react'
import styles from "./HeroHeader.module.scss"
function HeroHeader(props) {
    return (
        <div className={styles.HeroHeader}>
            <img src={props.img} alt="cameras"/> 
            <div> 
                <h1>{props.h1}</h1>
                <p>{props.p}</p>
            </div>
        </div>

    )
}

export default HeroHeader
