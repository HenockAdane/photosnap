import React from 'react'
import styles from "./FeaturedStory.module.scss"
import Arrow from "../Arrow/Arrow"


function FeaturedStory(props) {
    return (
        <div className={styles.FeaturedStory} style={{backgroundImage: props.img}}>                

            <div className={styles.featuredStoryText}>
                <h3>LAST MONTH'S FEATURED STORY</h3>
                <h1>{props.h1}</h1>
                <span className={styles.date}>{props.date}</span> <span className>{props.author}</span>
                <p>{props.description}</p>
                <Arrow h4="READ THE STORY"/>





                
            </div>


            
        </div>
    )
}

export default FeaturedStory
