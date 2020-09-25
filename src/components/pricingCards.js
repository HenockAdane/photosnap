import React from 'react'
import "../compoentsCSS/pricingCards.css"


function PricingCards(props) {
    return (
        <div className={props.class}>
        <h3>{props.type}</h3>
        <p>{props.desc}</p>
        <div>
            <h1>£{props.amount}</h1>
            <p>per {props.time}</p>
        </div>
        <button>PICK PLAN</button>
            
        </div>
    )
}

export default PricingCards
