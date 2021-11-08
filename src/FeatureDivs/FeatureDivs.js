import React from 'react'
import styles from "./FeatureDivs.module.scss"
function FeatureDivs(props) {
    return (
        <div className={styles.FeatureDivs}>
        <div className={styles.imgContainer}>
        <img src={props.img} alt="feature" />
        </div>
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
            
        </div>
    )
}

export default FeatureDivs
