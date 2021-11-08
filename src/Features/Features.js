import React from 'react'
import FeatureDivs from "../FeatureDivs/FeatureDivs"
import styles from "./Features.module.scss"
import HeroFooter from '../HeroFooter/HeroFooter'
import HeroHeader from '../HeroHeader/HeroHeader'

function Features(props) {

    return (
    <div>
        <HeroHeader img="./images/features/desktop/hero.jpg" 
        h1="FEATURES"
        p="We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories."/>

        <div className={styles.featureDivsContainer}>
            {props.features.map((a,i)=>{
                return <FeatureDivs  img={a.img} title={a.title} desc={a.desc} key={i}/>
            })}
        </div>

        <HeroFooter />
    </div>
    )
}

export default Features
