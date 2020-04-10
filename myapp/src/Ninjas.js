import React from "react";

//Here we see the use of props, the props info is sended from the main App component
//To the Ninjas functional component through parameter and then use through the code
//props contain the props object info, it can be name different
function Ninjas(props) {
  // console.log(props);
  //Here we are using destructuring, we are creating three variables from the info in our props
  const { ninjas } = props;
  const ninjaList = ninjas.map((ninja) => {
    return (
      //Is important to consider placing a unique key for every single object in the list
      //In this case we are using the id the every object has in the object, by we can use
      //The index of the array
      <div className="ninja" key={ninja.id}>
        {/*Here we are using destructuring variables*/}
        <div>Name: {ninja.name}</div>
        {/*Here we are using the props directly*/}
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
      </div>
    );
  });

  return (
    <div className="ninja-list">
      {/**Here we are deplaying the list */}
      {ninjaList}
    </div>
  );
}

export default Ninjas;
