import React from 'react'
import "../compoentsCSS/featureCheck.css"

function FeatureCompare(props) {
    return (
        <div className="featureCheckContainer">
            <div className="featureName">
                <h5>{props.feature}</h5>
            </div>
            <div className="tickContainer">
                <div className="tick" style={{backgroundImage: props.basic}}></div>
                <div className="tick" style={{backgroundImage: props.pro}}></div>
                <div className="tick" style={{backgroundImage: props.business}}></div>
            </div>

        </div>
    )
}

export default FeatureCompare
