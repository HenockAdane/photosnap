import React from 'react'
import "../compoentsCSS/arrow.css"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


function Arrow(props) {
    return (
        <div className="arrowContainer" style={{justifyContent: props.jc, borderTopStyle: props.border}}>

        <h4>READ STORY</h4>
        <Link to={"/"}><img src="/images/shared/desktop/arrow.svg"/></Link>

            
        </div>
    )
}

export default Arrow
