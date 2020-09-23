import React from 'react'
import "../compoentsCSS/storyDivs.css"

function StoryDivs(props) {
    return (
        <div className="storyDivsContainer" style={{backgroundImage: props.img}} >
        <div className="storyInfoDiv">
        <p>{props.p1}</p>
        <h4>{props.h4}</h4>
        <p>{props.p2}</p>

        <div className="readStory">

        <h5>READ STORY</h5>
        <button>---]</button>
        </div>
            
        </div>
        </div>
    )
}

export default StoryDivs
