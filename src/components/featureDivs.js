import React from 'react'
import "../compoentsCSS/featureDivs.css"

function FeatureDivs(props) {
    return (
        <div className="featureDivs">
        <div className="imgContainer">
        <img src={props.img} />
        </div>
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
            
        </div>
    )
}

export default FeatureDivs
