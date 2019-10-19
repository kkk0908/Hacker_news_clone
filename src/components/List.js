import React, { Component } from "react";
import Stories from "./Stories";
const stories = require("../hn_data/stories.json");
export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: stories
    };
  }

  render() {
    const story = this.state.stories;

    let arr = [];

    for (let i = 0; i < story.length; i++) {
      arr.push(<Stories story={story[i]} id={i + 1} />);
    }

    return (
      <div
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          backgroundColor: "lightgrey"
        }}
      >
        <h1>List page</h1>
        {arr}
      </div>
    );
  }
}

export default List;
