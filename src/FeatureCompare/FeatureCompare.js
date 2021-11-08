import React from 'react'
import styles from "./FeatureCompare.module.scss"

function FeatureCompare(props) {
    return (
        <div className={styles.FeatureCheckContainer}>
            <div className={styles.featureName}>
                <h5>{props.feature}</h5>
            </div>
            <div className={styles.tickContainer}>
                <div className={styles.tick} style={{backgroundImage: props.basic}}></div>
                <div className={styles.tick} style={{backgroundImage: props.pro}}></div>
                <div className={styles.tick} style={{backgroundImage: props.business}}></div>
            </div>

        </div>
    )
}

export default FeatureCompare
