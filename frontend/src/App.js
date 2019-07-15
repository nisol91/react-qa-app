import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './NavBar/NavBar';
import Container from './Container/Container';


class App extends Component {

  
  
  render() {
    
    return (
      <Router>
        <div>
          <NavBar />
          <Container/>
        </div>
      </Router>
    );
  }
}

export default App;