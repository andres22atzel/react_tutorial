//This is our root component, is the first component to look at moment of launch
import React from "react";
//Here we import the Nijas componet to the main App component
import Ninjas from "./Ninjas";
import AddNinjas from "./AddNinjas";

//here we are using a functional component instead of a class component
//In this case the render function is not needed
function App() {
  //Here we create a state which will contain an array of objects,
  //in this case because we are using stateless function component,
  //we need to declare the state varible type
  const state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Yoshi", age: 20, belt: "green", id: 2 },
      { name: "Crystal", age: 25, belt: "pink", id: 3 },
    ],
  };
  return (
    <div className="App">
      <h1>My First React app!</h1>
      <p>Welcom :)</p>
      <AddNinjas />
      {/*Here we are nesting the Ninjas component as a tag
        Also we are sending object info through props, this sintax
        is for functional components, for class components is different.
      */}
      {/**In this case to pase the state is not needed the this prefix, because we are using stateless function */}
      <Ninjas ninjas={state.ninjas} />
    </div>
  );
}

export default App;
