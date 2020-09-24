import React from 'react'
import HomeIntroDivs from "./homeIntroDivs"
import FeatureDivs from "./featureDivs"
import Arrow from "./arrow"
import Hero from "./hero"
import "../compoentsCSS/features.css"

function Features() {

    const [state, setState] = React.useState(()=>({
        featureDivs: [{
            img:"/images/features/desktop/responsive.svg",
            title: "100% Responsive",
            desc: "No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen"
        },
        {
            img:"/images/features/desktop/no-limit.svg",
            title: "No Photo Upload Limit",
            desc: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go"
        },
        {
            img:"/images/features/desktop/embed.svg",
            title:"Available to Embed",
            desc:"Embed Tweets, Facebook posts, Instagram media, Vimeo or Youtube videos, Google Maps, and more "
        },
        {
            img:"/images/features/desktop/custom-domain.svg",
            title:"Custome Domain",
            desc:"With Photosnap subscriptions you can host your stories on your own domain. You can also remove our brnading!"
        },
        {
            img: "/images/features/desktop/boost-exposure.svg",
            title: "Boost Your Exposure",
            desc:"Users that viewed your story or gallery can easily get notified of new and featured stories with our built in mailing list"
        },
        {
            img: "/images/features/desktop/drag-drop.svg",
            title:"Drag & Drop Image",
            desc: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories"
        },]
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

        <div className="featureBeta">
            <h1>WE'RE IN BETA. GET YOUR INVITE TODAY!</h1>
            <Arrow h4="GET AN INVITE" to={"/features"} />
        </div>
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