import React from 'react';
import logo from './logo.svg';
import './App.css';
import One from "./one"

function App() {

  const [state, setState] = React.useState(()=> (
    console.log(1),{name:"App", type:"functional", count: 0}))

  function minus(){
    return setState(ps => {
      return {...ps, count: ps.count-- }
    })
  }

  function add(){
    return setState(ps => {
      return {...ps, count: ps.count++ }
    })  }

  return (
    <div className="App">
    <button onClick={minus} >-</button>
    <One name={state.count} />
    <button onClick={add}>+</button>

    </div>
  );
}

export default App;

//useState is an array with two items, useState[0] === the state object, useState[1] === setState function

//when setting stat, you have to copy the current state and modify it

//useState function will run everytime the component renders which can slow the page down if theres a lot of state so I need to put in a call back function which returns the state object. this call back function will make sure that the useState() does not run which time the component renders

