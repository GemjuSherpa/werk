import React, { Component } from "react";
import Navbar from './components/Navbar';
import Landing from './components/Landing';

import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
          <Navbar />
          <Landing/>
      </Router>
        
      </div>
    )
  }
}

export default App;