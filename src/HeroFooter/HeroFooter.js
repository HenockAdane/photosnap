import React from 'react'
import Arrow from "../Arrow/Arrow"
import styles from "./HeroFooter.module.scss"

function HeroFooter() {
    return (
        <div className={styles.HeroFooter}>
            <h1>WE'RE IN BETA. GET YOUR INVITE TODAY!</h1>
            <Arrow h4="GET AN INVITE" to={"/features"} />
        </div>
    )
}

export default HeroFooter
