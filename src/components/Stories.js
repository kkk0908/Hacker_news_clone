/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      score: 0,
      story: {},
      descendants: 0
    };
  }
  componentDidMount() {
    this.setState({
      score: this.props.story.score,
      story: this.props.story,
      descendants: this.props.story.descendants
    });
  }

  upvoteIncrement = id => e => {
    this.setState({ score: this.state.score + 1 });
  };
  upvoteDecrement = () => {
    this.setState({ descendants: this.state.descendants + 1 });
  };

  render() {
    const divStyle = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start"
    };

    const story = this.props.story;

    if (story.url == null) {
      var url = story.url;
    } else {
      url = new URL(story.url);

      url = url.hostname;
    }

    const posts = (
      <div style={divStyle}>
        <div
          className="d-flex justify-content-start align-content-center"
          key={this.props.key}
        >
          <h6>
            {this.props.id}.{" "}
            <button
              type="button"
              className="btn btn-success btn-sm"
              onClick={this.upvoteIncrement(story.item_id)}
              id={story.item_id}
            >
              upvote <h7>{this.state.score}</h7>
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={this.upvoteDecrement}
            >
              DownVote <h7>{this.state.descendants}</h7>
            </button>
            <a style={{ textDecoration: "none", color: "inherit" }} href={url}>
              {" "}
              {story.title}
            </a>
          </h6>

          <a
            href="#"
            style={{
              fontSize: "15px",
              marginLeft: "6px",
              marginTop: "10px",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            ({url})
          </a>
        </div>
        <p style={{ marginTop: "-10px", fontSize: "12px" }}>
          <a>{this.state.score} points by </a>
          <a style={{ textDecoration: "none", color: "inherit" }} href="#">
            {story.by}
          </a>{" "}
          <a style={{ textDecoration: "none", color: "inherit" }} href="#">
            {story.submission_time}
          </a>{" "}
          |{" "}
          <a style={{ textDecoration: "none", color: "inherit" }} href="#">
            hide{" "}
          </a>
          |{" "}
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href={"http://localhost:3000/stories/" + story.item_id}
          >
            {story.kids.length} comments{" "}
          </a>{" "}
        </p>
      </div>
    );
    //});
    return <div>{posts}</div>;
  }
}

export default Stories;
