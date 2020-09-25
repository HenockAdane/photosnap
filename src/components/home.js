import React from 'react'
import HomeIntroDivs from "./homeIntroDivs"
import FeatureDivs from "./featureDivs"
import "../compoentsCSS/home.css"
import StoryDivs from './storyDivs'


function Home(props) {

    const [state, setState] = React.useState(()=> (
        console.log(1),{
          homeIntro: [{
            class: "one",
            img: "/images/home/desktop/create-and-share.jpg",
            h1: "CREATE AND SHARE YOUR PHOTO STORIES",
            p: "Photosnap is a platform for photographers and visual storytellers, We make it easy to share photos, tell stories and connect with others",
            to: "/",
            arrowText: "GET AN INVITE"
          },
          {
              class: "two",
              img: "/images/home/desktop/beautiful-stories.jpg",
              h1: "BEAUTIFUL STORIES EVERY TIME",
              p: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone",
              to: "/",
              arrowText: "VIEW THE STORIES"
          },
          {
              class:"one",
              img: "/images/home/desktop/designed-for-everyone.jpg",
              h1:"DESIGNED FOR EVERYONE",
              p: "Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses, you name it.",
              to: "/",
              arrowText: "VIEW THE STORIES"
          }
        ],
        storyDivs: props.storyDivs,
        featureDivs: props.featureDivs
        }))

        React.useEffect(()=>{
            console.log(state.homeIntro, state.featureDivs)
        }, [])


        let divs = state.homeIntro.map((a)=>{
           return  <HomeIntroDivs class={a.class} img={a.img} h1={a.h1} p={a.p} arrowTo={a.to} arrowText= {a.arrowText} />

        })

        let stories = state.storyDivs.map((a) => {
        return <StoryDivs p1={a.date} h4={a.title} p2={a.author} img= {a.img}/>
        })
        
        let featureDivs = state.featureDivs.map((a)=>{
            return <FeatureDivs  img={a.img} title={a.title} desc={a.desc}/>
        })


    return (
        <div>
        {divs}

        <div className="stories">
            {stories}
        </div>

        <div className="featureContainer">
        {featureDivs}
        </div>
            
        </div>
    )
}

export default Home
