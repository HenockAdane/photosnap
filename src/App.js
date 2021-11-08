import React, { useEffect } from 'react';
import './App.css';
import { useLocation, Route, Switch } from "react-router-dom";
import Home from "./Home/Home"
import Features from "./Features/Features"
import PricingPage from "./PricingPage/PricingPage"
import Header from './Header/Header';
import Stories from './Stories/Stories';
import Data from "./Data.json"
import Footer from './Footer/Footer';


function App() {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0,0)
  }, [location.pathname])




  return (
    <div className="App">

    <Header />




    <Switch>
          <Route exact={true} path="/" render={()=>(
            <Home homeIntro={Data.homeIntro} featureDivs={Data.features.filter((a,i)=> i <= 2)} storyDivs={Data.stories.filter((a,i)=> i <= 3)} />
          )}  />

          <Route exact={true} path="/stories" render={() =>(
            <Stories stories={Data.stories}/>)}/>

          <Route exact={true} path="/features" render={() =>(
            <Features features={Data.features}/>)}/>
          

          <Route exact={true} path="/pricing" render={() =>(
            <PricingPage priceCards={Data.priceCards} comparison={Data.comparison}/>)}/> 
    </Switch>

    

    <Footer />

    

    </div>
  );
}

export default App;



