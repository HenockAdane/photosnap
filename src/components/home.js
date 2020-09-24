import React from 'react'
import HomeIntroDivs from "./homeIntroDivs"


function Home() {

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
        ]
        }))

        React.useEffect(()=>{
            console.log(state.homeIntro)
        }, [])


        let divs = state.homeIntro.map((a)=>{
           return  <HomeIntroDivs class={a.class} img={a.img} h1={a.h1} p={a.p} arrowTo={a.to} arrowText= {a.arrowText} />

        })


    return (
        <div>
        {divs}
            
        </div>
    )
}

export default Home
