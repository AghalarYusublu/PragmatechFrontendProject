import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';


class App extends Component {
  state = {
    navArr: [
      {
        id: 1,
        navTitle: "World",
        navUrl: "https://www.youtube.com/",
        navClass: "bg-warning navbar navbar-expand-lg navbar-light  mb-4",

      },
      {
        id: 2,
        navTitle: "Nature",
        navUrl: "https://www.youtube.com/",
        navClass: "bg-primary navbar navbar-expand-lg navbar-light   mb-4",

      },
      {
        id: 3,
        navTitle: "Animals",
        navUrl: "https://www.youtube.com/",
        navClass: "bg-danger navbar navbar-expand-lg navbar-light   mb-4",

      },
      {
        id: 4,
        navTitle: "Human",
        navUrl: "https://www.youtube.com/",
        navClass: "bg-success navbar navbar-expand-lg navbar-light   mb-4",

      }, {
        id: 5,
        navTitle: "Info",
        navUrl: "https://www.youtube.com/",
        navClass: "bg-info navbar navbar-expand-lg navbar-light   mb-4",

      }, {
        id: 6,
        navTitle: "Secondary",
        navUrl: "https://www.youtube.com/",
        navClass: "bg-secondary navbar navbar-expand-lg navbar-light   mb-4",

      },
    ]
  }
  render() {
    return (
      <div className="container">
        <Navbar
          navArr={this.state.navArr}
        />
      </div>
    );
  }
}
export default App