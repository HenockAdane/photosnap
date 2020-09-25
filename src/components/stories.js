import React from 'react'
import StoryDivs from './storyDivs'
import FeaturedStory from "./featuredStory"
import "../compoentsCSS/stories.css"


function Stories(props) {


    const [state, setState] = React.useState(()=> (
        {stories: props.stories}))

        let divs = state.stories.map((a, i)=>{

            if(i !== 0){
                return <StoryDivs p1={a.date} h4={a.title} p2={a.author} img= {a.img}/> 
            }

            else{
                return <FeaturedStory img={a.img} h1={a.title} date={a.date} author={a.author} description={a.description} />
            }
        })
    return (
        <div className="storiesContainer">

        {divs}
            
        </div>
    )
}

export default Stories