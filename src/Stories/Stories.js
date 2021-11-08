import React from 'react'
import StoryDivs from '../StoryDivs/StoryDivs'
import FeaturedStory from "../FeaturedStory/FeaturedStory"
import styles from "./Stories.module.scss"


function Stories(props) {


        let divs = props.stories.map((a, i)=>{

            if(i !== 0){
                return <StoryDivs p1={a.date} h4={a.title} p2={a.author} img= {a.img} key={i}/> 
            }

            else{
                return <FeaturedStory img={a.img} h1={a.title} date={a.date} author={a.author} description={a.description} key={i}/>
            }
        })

    return (
        <div className={styles.StoriesContainer}>

        {divs}
            
        </div>
    )
}

export default Stories