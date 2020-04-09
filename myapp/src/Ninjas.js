import React from "react";

//Here we see the use of props, the props info is sended from the main App component
//To the Ninjas functional component through parameter and then use through the code
//props contain the props object info, it can be name different
function Ninjas(props) {
  // console.log(props);
  //Here we are using destructuring, we are creating three variables from the info in our props
  const { name, age, belt } = props;
  return (
    <div className="ninja">
      {/*Here we are using destructuring variables*/}
      <div>Name: {name}</div>
      {/*Here we are using the props directly*/}
      <div>Age: {props.age}</div>
      <div>Belt: {props.belt}</div>
    </div>
  );
}

export default Ninjas;
