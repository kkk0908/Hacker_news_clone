import React, { Component } from "react";

export class comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      comment: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();

    var b = this.state.comments.push({ text: this.state.comment });

    this.setState({ comments: this.state.comments });
    this.clearForm();
  }
  componentDidMount() {
    const storyId = this.props.match.params.id;
    const comments = require("../hn_data/" + storyId + ".json");
    this.setState({ comments: comments });
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({ comment: event.target.value });
  }

  clearForm() {
    document.getElementById("myForm").reset();
    this.setState({
      comment: ""
    });
  }
  render() {
    console.log(this.state.comments);
    var arr = [];
    this.state.comments.map(comment => {
      arr.push(<p>{comment.text}</p>);
    });

    return (
      <div
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          backgroundColor: "lightgrey"
        }}
      >
        <h1>{this.props.match.params.id}</h1>
        <form onSubmit={this.handleSubmit} id="myForm">
          <label>
            <textarea
              rows="4"
              columns="50"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <button className="btn-primary"> Comment</button>
        </form>
        {arr}
      </div>
    );
  }
}

export default comments;
