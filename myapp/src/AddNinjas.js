import React,{Component/*,useState*/} from "react";

class AddNinjas extends Component{
    state = {
        name: null,
        age: null,
        belt: null,
      };
      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value,
        });
      };
      handleSubmit = (e) => {
        e.preventDefault();
        //Here we are calling the given addNinja functino and returning it with the 
        //capted state as parameter
        this.props.addNinja(this.state) 
      };
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
              {/**For JSX inside the label the for is change to htmlFor */}
              <label htmlFor="name">Name:</label>
              {/**For JSX the input tag is finish with /> */}
              <input type="text" id="name" onChange={this.handleChange} />
      
              <label htmlFor="age">Age:</label>
              <input type="text" id="age" onChange={this.handleChange} />
      
              <label htmlFor="belt">Belt:</label>
              <input type="text" id="belt" onChange={this.handleChange} />
      
              <button>Submit</button>
            </form>
          </div>
        )
    }
}

//  function AddNinjas() {
//    const [state,setState] = useState({
//      name: null,
//      age: null,
//      belt: null,
//    });
//    const handleChange = (e) => {
//      setState({state,
//        [e.target.id]: e.target.value,
//      });
//    };
//    const handleSubmit = (e) => {
//      e.preventDefault();
//      console.log(state);
//    };
//    return (
//      <div>
//        <form onSubmit={handleSubmit}>
//          {/**For JSX inside the label the for is change to htmlFor */}
//          <label htmlFor="name">Name:</label>
//          {/**For JSX the input tag is finish with /> */}
//          <input type="text" id="name" onChange={handleChange} />

//          <label htmlFor="age">Age:</label>
//          <input type="text" id="age" onChange={handleChange} />

//          <label htmlFor="belt">Belt:</label>
//          <input type="text" id="belt" onChange={handleChange} />

//          <button>Submit</button>
//        </form>
//      </div>
//    );
//  }

export default AddNinjas;
