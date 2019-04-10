import React, { Component } from "react";
import "./App.css";
import PublicationsContainer from "./components/PublicationsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PublicationsContainer />
      </div>
    );
  }
}

export default App;
