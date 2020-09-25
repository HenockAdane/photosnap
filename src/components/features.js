import React from 'react'
import HomeIntroDivs from "./homeIntroDivs"
import FeatureDivs from "./featureDivs"
import Arrow from "./arrow"
import Hero from "./hero"
import "../compoentsCSS/features.css"
import Beta from './beta'

function Features(props) {

    const [state, setState] = React.useState(()=>({
        featureDivs: props.featureDivs
    }))


    let featureDivs = state.featureDivs.map((a)=>{
        return <FeatureDivs  img={a.img} title={a.title} desc={a.desc}/>
    })
    return (
    <div>
        <Hero img="/images/features/desktop/hero.jpg" 
        h1="FEATURES"
        p="We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories."/>

        <div className="featureDivsContainer">
            {featureDivs}
        </div>

        <Beta />
    </div>
    )
}

export default Features

// function HomeIntroDivs(props) {



//     return (
//         <div className={props.class}>
//         <img className="introImg" src={props.img} />
        
//         <div className="introTextDiv">
//             <h1>{props.h1}</h1>
//             <p>{props.p}</p>
//             <Link to={props.to}>{props.Ltext}</Link>
//         </div>
            
//         </div>
//     )