import React from 'react';
import logo from './logo.svg';
import './App.css';
import One from "./one"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./components/home"
import Stories from "./components/stories"
import Features from "./components/features"
import Arrow from "./components/arrow"
import Pricing from "./components/pricing"
import { gsap } from "gsap"

// function App() {

//   const [state, setState] = React.useState(()=> (
//     console.log(1),{name:"App", type:"functional", count: 0}))


//     React.useEffect(()=> (console.log("render")), [state.count])

//   function minus(){
//     return setState(ps => {
//       return {...ps, count: ps.count- 1 }
//     })
//   }

//   function add(){
//     return setState(ps => {
//       return {...ps, count: ps.count+ 1 }
//     })  }

//   return (
//     <div className="App">
//     <button onClick={minus} >-</button>
//     <One name={state.count} />
//     <button onClick={add}>+</button>

//     </div>
//   );
// }

function App() {

  const [state, setState] = React.useState(()=> (
    console.log(1),{ count: 0, menu:"none", active: "", vw: window.innerWidth,
    featureDivs: [{
      img:"/images/features/desktop/responsive.svg",
      title: "100% Responsive",
      desc: "No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen"
  },
  {
      img:"/images/features/desktop/no-limit.svg",
      title: "No Photo Upload Limit",
      desc: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go"
  },
  {
      img:"/images/features/desktop/embed.svg",
      title:"Available to Embed",
      desc:"Embed Tweets, Facebook posts, Instagram media, Vimeo or Youtube videos, Google Maps, and more "
  },
  {
      img:"/images/features/desktop/custom-domain.svg",
      title:"Custome Domain",
      desc:"With Photosnap subscriptions you can host your stories on your own domain. You can also remove our brnading!"
  },
  {
      img: "/images/features/desktop/boost-exposure.svg",
      title: "Boost Your Exposure",
      desc:"Users that viewed your story or gallery can easily get notified of new and featured stories with our built in mailing list"
  },
  {
      img: "/images/features/desktop/drag-drop.svg",
      title:"Drag & Drop Image",
      desc: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories"
  }],
  stories:[{
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
}


]}))


  //   React.useEffect(()=> (console.log("render")), [state.count])

  React.useEffect(()=>{

    console.log("123")

    window.addEventListener("resize", (e)=>{
        setState(ps => ({...ps, vw: window.innerWidth}))

            console.log(window.innerWidth)
    })


    // let timeline = gsap.timeline({defaults:{duration:1}})
    // timeline
    // .from("header", {y:"-100%", opacity: 0})
    // .from(".footer", {x:"100%"},"<")

}, [])

  const toggleMenu = (e)=> setState(ps => {
    if (ps.menu === "flex"){
      // gsap.to(".odd", {x:"-100%", duration: 0.5})
      // gsap.to(".even", {x:"100%", duration: 0.5})
      return {...ps, menu: "none", active: ""}
    }

    else{
      gsap.from(".odd", {x:"-100%", duration: 0.5})
      gsap.from(".even", {x:"100%", duration: 0.5})
  
      return {...ps, menu: "flex", active: "open"}
    }
    })


  return (
    <div className="App">
    <header>
    <div className="menuContainer">
          <Link className="logo" to={"/"}>
            <h4>PHOTOSNAP</h4>
          </Link>

          {/* <button  onClick={toggleMenu}>CLICK HEREE</button> */}
          <div className={`menu ${state.active}`} onClick={toggleMenu} style={{display: state.vw > 768 ? "none" : "flex"}}>
            <div className="burger"></div>
          </div>

          
    </div>

      <nav>
        <ul style={{display: state.vw <= 768 ? state.menu : "unset"}}>
          <Link className="nav-links odd" to={"/"}>HOME</Link>
          <Link className="nav-links even" to={"/stories"}>STORIES</Link>
          <Link className="nav-links odd" to={"/features"}>FEATURES</Link>
          <Link className="nav-links even" to={"/pricing"}>PRICING</Link>
          <Link className="inv" to={"/"}>GET AN INVITE</Link>

        </ul>

        

      </nav>


    </header>




    <Switch>
          <Route exact={true} path="/" render={()=>(
            <Home featureDivs={state.featureDivs.filter((a,i)=> i <= 2)} storyDivs={state.stories.filter((a,i)=> i <= 3)} />
          )}  />

          <Route exact={true} path="/stories" render={() =>(
            <Stories stories={state.stories}/>)}/>

          <Route exact={true} path="/features" render={() =>(
            <Features featureDivs={state.featureDivs}/>)}/> 

          <Route exact={true} path="/pricing" render={() =>(
            <Pricing/>)}/> 
    </Switch>

    

    <footer>

      <div className="footerDiv1">
        <Link className="logo" to={"/"}>PHOTOSNAP</Link>

      <div className="socialsDiv">
            <a href="#"><img src="/images/shared/desktop/facebook.svg" /></a>
            <a href="#"><img src="/images/shared/desktop/instagram.svg" /></a>
            <a href="#"><img src="/images/shared/desktop/twitter.svg" /></a>
            <a href="#"><img src="/images/shared/desktop/pinterest.svg" /></a>
            <a href="#"><img src="/images/shared/desktop/youtube.svg" /></a>
      </div>

      </div>

      <div className="footerDiv2">
          <Link to={"/"}>HOME</Link>
          <Link to={"/stories"}>STORIES</Link>
          <Link to={"/features"}>FEATURES</Link>
          <Link to={"/pricing"}>PRICING</Link>
      </div>

      <div className="footerDiv3">
        <Arrow jc="flex-end" h4="GET AN INVITE" />
        <p>Copyright 2019. All Rights Reserved</p>

      </div>

    </footer>


    

    </div>
  );
}

export default App;

//useState is an array with two items, useState[0] === the state object, useState[1] === setState function

//when setting stat, you have to copy the current state and modify it

//useState function will run everytime the component renders which can slow the page down if theres a lot of state so I need to put in a call back function which returns the state object. this call back function will make sure that the useState() does not run which time the component renders

