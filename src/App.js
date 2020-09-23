import React from 'react';
import logo from './logo.svg';
import './App.css';
import One from "./one"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./components/home"
import Stories from "./components/stories"
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

  // const [state, setState] = React.useState(()=> (
  //   console.log(1),{name:"App", type:"functional", count: 0}))


  //   React.useEffect(()=> (console.log("render")), [state.count])

  return (
    <div className="App">
    <header>

      <Link className="logo" to={"/"}>
        <h4>PHOTOSNAP</h4>
      </Link>
      <nav>
        <ul>
          <Link className="nav-links" to={"/stories"}>STORIES</Link>
          <Link className="nav-links" to={"/features"}>FEATURES</Link>
          <Link className="nav-links" to={"/pricing"}>PRICING</Link>
        </ul>

        {/* <Link className="inv" to={"/"}>GET AN INVITE</Link> */}
      </nav>

      <Link className="inv" to={"/"}>GET AN INVITE</Link>

    </header>
    <Switch>
          <Route exact={true} path="/" render={()=>(
            <Home />
          )}  />
          <Route exact={true} path="/stories" render={() =>(
            <Stories/>)}/>
 
        </Switch>


    

    </div>
  );
}

export default App;

//useState is an array with two items, useState[0] === the state object, useState[1] === setState function

//when setting stat, you have to copy the current state and modify it

//useState function will run everytime the component renders which can slow the page down if theres a lot of state so I need to put in a call back function which returns the state object. this call back function will make sure that the useState() does not run which time the component renders

