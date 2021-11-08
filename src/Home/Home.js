import React from 'react'
import styles from "./Home.module.scss"
import StoryDivs from '../StoryDivs/StoryDivs'
import FeatureDivs from '../FeatureDivs/FeatureDivs'
import HomeIntroDivs from '../HomeIntroDivs/HomeIntroDivs'


function Home(props) {

    return (
        <div className={styles.Home}>
        {props.homeIntro.map((a,i)=>{
            return  <HomeIntroDivs class={a.class} img={a.img} h1={a.h1} p={a.p} arrowTo={a.to} arrowText= {a.arrowText} key={i}/>
 
         })}

        <div className={styles.stories}>
            {props.storyDivs.map((a,i) => {
                return <StoryDivs p1={a.date} h4={a.title} p2={a.author} img= {a.img} key={i}/>
                })}
        </div>

        <div className={styles.featureContainer}>
            {props.featureDivs.map((a,i)=>{
                return <FeatureDivs  img={a.img} title={a.title} desc={a.desc} key={i}/>
            })}
        </div>
            
        </div>
    )
}

export default Home
