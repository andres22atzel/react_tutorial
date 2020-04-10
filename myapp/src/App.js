//This is our root component, is the first component to look at moment of launch
import React, { Component } from "react";
//Here we import the Nijas componet to the main App component
import Ninjas from "./Ninjas";
import AddNinjas from "./AddNinjas";

//here we are using a functional component instead of a class component
//In this case the render function is not needed
class App extends Component {
  //Here we create a state which will contain an array of objects,
  //in this case because we are using stateless function component,
  //we need to declare the state varible type
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Yoshi", age: 20, belt: "green", id: 2 },
      { name: "Crystal", age: 25, belt: "pink", id: 3 },
    ],
  };
  //When this function is called with the state parameter from the AddNinja component
  addNinja = (ninja) => {
    //First we add another property to the object ninja a random id
    ninja.id = Math.random();
    //Now that we have our new ninja info complete, we create a local variable
    //Which will be an array of the previous ninjas and we add the new ninja
    //This is done through a SPREAD OPERATOR
    let ninjas = [...this.state.ninjas, ninja];
    //Then we set our new state which will be updated with our local array we just created
    this.setState({
      ninjas: ninjas,
    });
  };
  deleteNinja = (id) => {
    //Using an Non Destructive method call FILTER
    //It will asign to the local variable ninjas an array that satisfies the condicion
    let ninjas = this.state.ninjas.filter(ninja=>{
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  };
  render() {
    return (
      <div className="App">
        <h1>My First React app!</h1>
        <p>Welcom :)</p>
        {/*Here we are nesting the Ninjas component as a tag
        Also we are sending object info through props, this sintax
        is for functional components, for class components is different.
      */}
        {/**In this case to pase the state is not needed the this prefix, because we are using stateless function */}
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        {/* Here we are sending by parameter de addNinja function to the component AddNinja */}
        <AddNinjas addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
