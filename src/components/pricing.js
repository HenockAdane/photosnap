import React from 'react'
import Hero from "./hero"
import "../compoentsCSS/pricing.css"
import PricingCards from './pricingCards'
import FeatureCheck from './featureCompare'
import FeatureComparePhone from './featureComparePhone'
import Beta from './beta'

function Pricing(props) {

    
    const [state, setState] = React.useState(()=>({type: "monthly", justifyContent: "unset", color1: "black", color2:"#979797", 
        cardDetails: [{
            class: "priceCard",
            type: "Basic",
            desc: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
            amount: 19.00 ,
            time: "month"
        },
        {
            class: "priceCard big",
            type: "Pro",
            desc: "More advanced features available. Recommended for photography veterans and professionals.",
            amount: 39.00,
            time: "month" 
        },
        {
            class: "priceCard",
            type: "Business",
            desc: "Additional features available such as more detailed metrics. Recommended for business owners.",
            amount: 99.00,
            time: "month"
        }],
        compare: [
            {
                feature: "UNLIMITED STORY POSTING",
                basic: "url(/images/pricing/desktop/check.svg)",
                pro: "url(/images/pricing/desktop/check.svg)",
                business: "url(/images/pricing/desktop/check.svg)"
            },
            {
                feature: "UNLIMITED PHOTO UPLOAD",
                basic: "url(/images/pricing/desktop/check.svg)",
                pro: "url(/images/pricing/desktop/check.svg)",
                business: "url(/images/pricing/desktop/check.svg)"
            },
            {
                feature:"EMBEDDING CUSTOM CONTENT" ,
                basic: "unset",
                pro: "url(/images/pricing/desktop/check.svg)",
                business: "url(/images/pricing/desktop/check.svg)"
            },
            {
                feature: "CUSTOMIZE METADATA",
                basic: "unset",
                pro: "url(/images/pricing/desktop/check.svg)",
                business: "url(/images/pricing/desktop/check.svg)"
            },
            {
                feature: "ADVANCED METRICS",
                basic: "unset",
                pro: "unset",
                business: "url(/images/pricing/desktop/check.svg)"
            },
            {
                feature: "PHOTO DOWNLOADS",
                basic: "unset",
                pro: "unset",
                business: "url(/images/pricing/desktop/check.svg)"
            },
            {
                feature: "SEARCH ENGINE INDEXING",
                basic: "unset",
                pro: "unset",
                business: "url(/images/pricing/desktop/check.svg)"
            },
            {
                feature: "CUSTOM ANALYTICS",
                basic: "unset",
                pro: "unset",
                business: "url(/images/pricing/desktop/check.svg)"
            }            
        ], vw: window.innerWidth
    }))



    React.useEffect(()=>{

        console.log("123")

        // window.addEventListener("resize", (e)=>{
        //     if (window.innerWidth > 768){
        //       console.log(window.innerWidth)
        // }

        window.addEventListener("resize", (e)=>{
            setState(ps => ({...ps, vw: window.innerWidth}))

                console.log(window.innerWidth)


            
        })

    }, [])
    



    // let justifyContent;

    // if(state.type === "monthly"){
    //     justifyContent = "unset"
    // }

    // else{
    //     justifyContent = "flex-end"
    // }

    const toggle = () => {
        if (state.type === "monthly"){
            return setState(ps => ({...ps, type:"yearly", justifyContent: "flex-end", color1:"#979797", color2: "black",cardDetails: ps.cardDetails.map((a)=>{
                return {...a, amount: a.amount * 10, time: "year"}
            })
        }
            
            ))
        }

        else{
            return setState(ps => ({...ps, type:"monthly", justifyContent: "unset", color1: "black", color2:"#979797",cardDetails: ps.cardDetails.map((a)=>{
                return {...a, amount: a.amount / 10, time: "month"}
            })}))
        }
    }

    let cards = state.cardDetails.map((a)=>{
        return <PricingCards class={a.class} type={a.type} desc={a.desc} amount={a.amount} time={a.time} />
    })



    return (
        <div>
            <Hero img="/images/pricing/desktop/hero.jpg" h1="PRICING" p="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos." />

            <div className="priceContainer">
            <div className="btnContainer">

                <span style={{color: state.color1}}>Monthly</span><button className="toggleBtn" style={{justifyContent: state.justifyContent}} onClick={toggle}>

                    <div className="btnsBall"></div>
                </button><span style={{color: state.color2}}>Yearly</span>
            </div>
            <div className="cardsContainer">
                {cards}
            </div>
            </div>

            <div className="compareContainer">
            <h1>COMPARE</h1>

            <div className="introCompareContainer">
            <div className="compareIntroFeature">
                <h5>THE FEATURES</h5>
            </div>

            <div className="compareIntroTypeContainer">
                <h5>BASIC</h5>
                <h5>PRO</h5>
                <h5>BUSINESS</h5>
            </div>

            </div>

                {state.vw < 425 ? state.compare.map((a)=> <FeatureComparePhone feature={a.feature} basic={a.basic} pro={a.pro} business={a.business} />) : state.compare.map((a)=> <FeatureCheck feature={a.feature} basic={a.basic} pro={a.pro} business={a.business} />) }
            </div>
            <Beta />
        </div>
    )
}

export default Pricing

// if(state.vw < 475){
//     return compare = state.compare.map((a)=> <FeatureComparePhone feature={a.feature} basic={a.basic} pro={a.pro} business={a.business} />)
// }

// else{
//     return compare = state.compare.map((a)=> <FeatureCheck feature={a.feature} basic={a.basic} pro={a.pro} business={a.business} />)
// }