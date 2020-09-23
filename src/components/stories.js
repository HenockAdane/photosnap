import React from 'react'
import StoryDivs from './storyDivs'
import FeaturedStory from "./featuredStory"
import "../compoentsCSS/stories.css"


function Stories() {


    const [state, setState] = React.useState(()=> (
        {stories:[{
            img: "url(/images/stories/desktop/moon-of-appalacia.jpg)",
            date: "March 2nd 2020",
            title: "HAZY FULL MOON OF APPALACHIA",
            description: 'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and hile the ridges are not high, the terrain is extremely rugged.',
            author: "by John Appleseed"
        },{
            img: "url(/images/stories/desktop/mountains.jpg)",
            date: "April 16th 2020",
            title: "The Mountains",
            author: "by John Appleseed"
        },
        {
            img: "url(/images/stories/desktop/cityscapes.jpg)",
            date: "April 14th 2020",
            title: "Sunset Cityscapes",
            author: "by Benjamin Cruz"
        },
        {
            img: "url(/images/stories/desktop/18-days-voyage.jpg)",
            date: "April 11th 2020",
            title: "18 Days Voyage",
            author: "by Alexei Borodin"
        },
        {
            img:"url(/images/stories/desktop/architecturals.jpg)",
            date: "April 9th 2020",
            title: "Architecturals",
            author: "by Samantha Brooke"
        },
        {
            img:"url(/images/stories/desktop/world-tour.jpg)",
            date: "April 7th 2020",
            title: "World Tour 2019",
            author: "by Timothy Wagner"
        },
        {
            img:"url(/images/stories/desktop/unforeseen-corners.jpg)",
            date: "April 3rd 2020",
            title: "Unforeseen Corners",
            author: "by William Malcolm"
        },
        {
            img:"url(/images/stories/desktop/king-on-africa.jpg)",
            date: "March 29th 2020",
            title: "King on Africa: Part II",
            author: "by Tim Hillenburg"
        },
        {
            img:"url(/images/stories/desktop/trip-to-nowhere.jpg)",
            date: "March 21th 2020",
            title: "The Trip to Nowhere",
            author: "by Felicia Rourke"
        },
        {
            img:"url(/images/stories/desktop/rage-of-the-sea.jpg)",
            date: "March 19th 2020",
            title: "Rage of The Sea",
            author: "by Mohammed Abdul"
        },
        {
            img:"url(/images/stories/desktop/running-free.jpg)",
            date: "March 16th 2020",
            title: "Running Free",
            author: "by Michelle"
        },
        {
            img:"url(/images/stories/desktop/behind-the-waves.jpg)",
            date: "March 11th 2020",
            title: "Behind the Waves",
            author: "by Lamarr Wilson"
        },
        {
            img:"url(/images/stories/desktop/calm-waters.jpg)",
            date: "March 9th 2020",
            title: "Calm Waters",
            author: "by Samantha Brooke"
        },
        {
            img:"url(/images/stories/desktop/milky-way.jpg)",
            date: "March 5th 2020",
            title: "The Milky Way",
            author: "by Benjamin Cruz"
        },
        {
            img:"url(/images/stories/desktop/dark-forest.jpg)",
            date: "March 4th 2020",
            title: "Night at The Dark Forest",
            author: "by Mohammed Abdul"
        },
        {
            img:"url(/images/stories/desktop/somwarpet.jpg)",
            date: "March 1st 2020",
            title: "Somwarpet's Beauty",
            author: "by Michelle"
        },
        {
            img:"url(/images/stories/desktop/land-of-dreams.jpg)",
            date: "February 25th 2020",
            title: "Land of Dreams",
            author: "by William Malcolm"
        },


        ]}))

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