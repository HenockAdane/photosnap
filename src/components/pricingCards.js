import React from 'react'

function PricingCards(props) {
    return (
        <div className="priceCard">
        <h3>{props.type}</h3>
        <p>{props.desc}</p>
        <h1>£{props.amount}</h1>
        <p>per {props.time}</p>
        <button>PICK PLAN</button>
            
        </div>
    )
}

export default PricingCards
