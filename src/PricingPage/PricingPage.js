import React, {useState} from 'react'
import styles from "./PricingPage.module.scss"
import PriceCard from '../PriceCard/PriceCard'
import FeatureCompare from '../FeatureCompare/FeatureCompare'
import HeroFooter from '../HeroFooter/HeroFooter'
import HeroHeader from "../HeroHeader/HeroHeader"

function PricingPage(props) {


    const [isMonthlyPlan, setIsMonthlyPlan] = useState(true)


    return (
        <div className={styles.PricingPage}>
            <HeroHeader img="/images/pricing/desktop/hero.jpg" h1="PRICING" p="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos." />

            <div className={styles.priceContainer}>
            <div className={styles.btnContainer}>

                <span style={{color: isMonthlyPlan ? "black": "#979797"}}>Monthly</span>
                
                <button className={styles.toggleBtn} style={{justifyContent: isMonthlyPlan ? "unset" : "flex-end"}} onClick={() => setIsMonthlyPlan(!isMonthlyPlan)}>

                    <div className={styles.btnsBall}></div>
                </button><span style={{color: isMonthlyPlan ? "#979797" : "black"}}>Yearly</span>
            </div>



            <div className={styles.cardsContainer}>
                {props.priceCards.map((a,i)=><PriceCard class={styles.priceCard} type={a.type} desc={a.desc} amount={isMonthlyPlan ? a.amount : a.amount * 12} time={isMonthlyPlan ? "month" : "year"} key={i}/>
                )}
            </div>
            </div>

            <div className={styles.compareContainer}>
            <h1>COMPARE</h1>

            <div className={styles.introCompareContainer}>
            <div className={styles.compareIntroFeature}>
                <h5>THE FEATURES</h5>
            </div>

            <div className={styles.compareIntroTypeContainer}>
                <h5>BASIC</h5>
                <h5>PRO</h5>
                <h5>BUSINESS</h5>
            </div>

            </div>

                {props.comparison.map((a,i) => <FeatureCompare feature={a.feature} basic={a.basic} pro={a.pro} business={a.business} key={i}/>)}
            </div>
            <HeroFooter/>
        </div>
    )
}

export default PricingPage