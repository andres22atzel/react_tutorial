//This is our root component, is the first component to look at moment of launch
import React from "react";
//Here we import the Nijas componet to the main App component
import Ninjas from "./Ninjas";

//here we are using a functional component instead of a class component
//In this case the render function is not needed
function App() {
  return (
    <div className="App">
      <h1>My First React app!</h1>
      <p>Welcom :)</p>
      {/*Here we are nesting the Ninjas component as a tag
        Also we are sending object info through props, this sintax
        is for functional components, for class components is different.
      */}
      <Ninjas name={'Ryu'} age={25} belt={'Black'}/>
      {/**here we are recycling the Ninjas component */}
      <Ninjas name={'Yoshi'} age={80} belt={'White'}/>
    </div>
  );
}

export default App;
