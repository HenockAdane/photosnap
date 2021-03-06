import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "../compoentsCSS/featuredStory.css"
import Arrow from "./arrow"


function FeaturedStory(props) {
    return (
        <div className="featuredStory" style={{backgroundImage: props.img}}>                

            <div className="featuredStoryText">
                <h3>LAST MONTH'S FEATURED STORY</h3>
                <h1>{props.h1}</h1>
                <span className="date">{props.date}</span> <span className>{props.author}</span>
                <p>{props.description}</p>
                <Arrow h4="READ THE STORY"/>





                
            </div>


            
        </div>
    )
}

export default FeaturedStory
