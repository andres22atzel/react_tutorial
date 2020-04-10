import React from "react";

//Here we see the use of props, the props info is sended from the main App component
//To the Ninjas functional component through parameter and then use through the code
//props contain the props object info, it can be name different
//With funtional components, we can destructure the props directly in the function parameter parentesis
function Ninjas({ ninjas, deleteNinja }) {
  // console.log(props);
  const ninjaList = ninjas.map((ninja) => {
    //here we are using conditionals
    // if (ninja.age > 20) {
    //   return (
    //     //Is important to consider placing a unique key for every single object in the list
    //     //In this case we are using the id the every object has in the object, by we can use
    //     //The index of the array
    //     <div className="ninja" key={ninja.id}>
    //       {/*Here we are using destructuring variables*/}
    //       <div>Name: {ninja.name}</div>
    //       {/*Here we are using the props directly*/}
    //       <div>Age: {ninja.age}</div>
    //       <div>Belt: {ninja.belt}</div>
    //     </div>
    //   );
    // } else {
    //   return null;
    // }
    // // here we are using ternary operator for condiciotinals
    // // Sintax is firt condition ? what to display if its true : what to display if its false
    return ninja.age > 20 ? (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <button
        //Using ANONIMOUS FUNCTION is use to we can send id by parameters without calling the method
        //at the moment, instead it will be call when the button is click.
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          Delete Ninja
        </button>
      </div>
    ) : null;
  });

  return (
    <div className="ninja-list">
      {/**Here we are deplaying the list */}
      {ninjaList}
    </div>
  );
}

export default Ninjas;
