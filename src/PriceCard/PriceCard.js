import React from 'react'
import styles from "./PriceCard.module.scss"


function PricingCards(props) {
    return (
        <div className={styles.priceCard}>
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
