import React from 'react'
import { Link } from "react-router-dom";
import "../compoentsCSS/homeIntroDivs.css"


function HomeIntroDivs(props) {



    return (
        <div className={props.class}>
        <img className="introImg" src={props.img} />
        
        <div className="introTextDiv">
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
            <Link to={props.to}>{props.Ltext}</Link>
        </div>
            
        </div>
    )
}

export default HomeIntroDivs

//rfce