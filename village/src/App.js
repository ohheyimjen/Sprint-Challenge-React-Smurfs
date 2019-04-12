import React, { Component } from "react";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import axios from "axios";
import {NavLink, Link, Route} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response);
        this.setState({
          smurfs: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

// const Navigation = (props) => {
//     return (
//       <div>
//         <div className="App">
//           <h1>Welcome to the Smurf Village!</h1>
//           <div>
//             <Link to="/" className="link-home">Home</Link>
//           </div>
//           <div>
//             <Link to="/smurfs">Meet the Smurfs</Link>
//           </div>
//           <div>
//             <Link to="/smurf-form">Add a Smurf</Link>
//           </div>
//         </div>
//       </div>
//     );
//   };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavLink to="/smurf-form" className="nav">Add a Smurf</NavLink>
        <NavLink to="/smurfs" className="nav">Go to Smurf Village!</NavLink>
        <Link to="/smurfs" className="nav">Smurfs</Link>
        <Link to="/smurf-form">Smurf Form</Link>
        
        <Route path="/smurf-form" 
          render={props => (
          <SmurfForm 
            {...props}
            addSmurf={this.addSmurf}
          />
          )}
          />

        <Route path="/smurfs"  
          render={props => (
          <Smurfs 
          {...props}
            smurfs={this.state.smurfs} 
        />
        )}
        />
      </div>
    );
  }
}

export default App;
