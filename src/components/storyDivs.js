import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "../compoentsCSS/storyDivs.css"
import Arrow from "./arrow"


function StoryDivs(props) {
    return (
        <Link to={"/"} className="storyDivsContainer" style={{backgroundImage: props.img}} >
        <div className="storyInfoDiv">
        <p>{props.p1}</p>
        <h4>{props.h4}</h4>
        <p>{props.p2}</p>


        <Arrow jc={"space-between"} border="solid" h4="READ THE STORY"/>
            
        </div>
        </Link>
    )
}

export default StoryDivs
