import React from 'react'
import Hero from "./hero"
import "../compoentsCSS/pricing.css"
import PricingCards from './pricingCards'

function Pricing(props) {

    
    const [state, setState] = React.useState(()=>({type: "monthly", justifyContent: "unset", 
        cardDetails: [{
            type: "Basic",
            desc: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
            amount: 19.00 ,
            time: "month"
        },
        {
            type: "Pro",
            desc: "More advanced features available. Recommended for photography veterans and professionals.",
            amount: 39.00,
            time: "month" 
        },
        {
            type: "Business",
            desc: "Additional features available such as more detailed metrics. Recommended for business owners.",
            amount: 99.00,
            time: "month"
        }]}))

    React.useEffect(()=>console.log("123"), [])

    // let justifyContent;

    // if(state.type === "monthly"){
    //     justifyContent = "unset"
    // }

    // else{
    //     justifyContent = "flex-end"
    // }

    const toggle = () => {
        if (state.type === "monthly"){
            return setState(ps => ({...ps, type:"yearly", justifyContent: "flex-end", cardDetails: ps.cardDetails.map((a)=>{
                return {...a, amount: 1, time: "year"}
            })
        }
            
            ))
        }

        else{
            return setState(ps => ({...ps, type:"monthly", justifyContent: "unset"}))
        }
    }

    let cards = state.cardDetails.map((a)=>{
        return <PricingCards type={a.type} desc={a.desc} amount={a.amount} time={a.amount} />
    })

    return (
        <div>
            <Hero img="/images/pricing/desktop/hero.jpg" h1="PRICING" p="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos." />

        
            <button className="toggleBtn" style={{justifyContent: state.justifyContent}} onClick={toggle}>
                <div className="btnsBall"></div>
            </button>

            {cards}
        </div>
    )
}

export default Pricing
