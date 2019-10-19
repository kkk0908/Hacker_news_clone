import React from "react";

import "./App.css";

const stories = require("./hn_data/stories.json");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: stories
    };
  }

  render() {
    return (
      <div
        className="app"
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          backgroundColor: "lightgrey"
        }}
      >
        <h1>Home</h1>
      </div>
    );
  }
}

export default App;
