import React from 'react'
import Arrow from "./arrow"
import "../compoentsCSS/beta.css"

function Beta() {
    return (
        <div className="featureBeta">
            <h1>WE'RE IN BETA. GET YOUR INVITE TODAY!</h1>
            <Arrow h4="GET AN INVITE" to={"/features"} />
        </div>
    )
}

export default Beta
