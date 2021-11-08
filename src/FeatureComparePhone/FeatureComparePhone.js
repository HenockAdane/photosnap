import React from 'react'
import styles from "./FeatureComparePhone.module.scss"

function FeatureComparePhone(props) {
    return (
        <div className="featureCheckContainer">
            <div className="featureName">
                <h5>{props.feature}</h5>
            </div>
            <div className="tickContainer">
            <div className="">
                <h6>BASIC</h6>
                <div className="tick" style={{backgroundImage: props.basic}}></div>
            </div>
            <div className="">
                <h6>PRO</h6>
                <div className="tick" style={{backgroundImage: props.pro}}></div>
            </div>
            <div className="">
                <h6>BUSINESS</h6>
                <div className="tick" style={{backgroundImage: props.business}}></div>
            </div>

            </div>

        </div>
    )
}

export default FeatureComparePhone
