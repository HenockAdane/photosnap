import React from 'react'
import "../compoentsCSS/hero.css"
function Hero(props) {
    return (
        <div className="featureHero">
            <img className="featureHeroImg" src={props.img}/> 
            <div className="featureHeroText"> 
                <h1>{props.h1}</h1>
                <p>{props.p}</p>
            </div>
        </div>

    )
}

export default Hero
