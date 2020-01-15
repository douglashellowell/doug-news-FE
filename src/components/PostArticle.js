import React, { Component } from "react";
import { insertArticle } from "../api";

class PostArticle extends Component {
  state = {
    titleInput: "",
    bodyInput: "",
    showform: false
  };

  render() {
    const { titleInput, bodyInput, showform } = this.state;
    return (
      <>
        <button onClick={this.toggleShowForm}>post comment</button>
        {showform && (
          <form onSubmit={this.submitArticle}>
            <label>
              Title:
              <input
                type="text"
                name="titleInput"
                onChange={this.handleChange}
                value={titleInput}
              />
            </label>
            <label>
              Body:
              <input
                type="text"
                name="bodyInput"
                onChange={this.handleChange}
                value={bodyInput}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        )}
      </>
    );
  }

  toggleShowForm = () => {
    this.setState(currentState => {
      return { showform: !currentState.showform };
    });
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  submitArticle = event => {
    event.preventDefault();
    const { titleInput, bodyInput } = this.state;
    if (titleInput && bodyInput) {
      insertArticle(titleInput, bodyInput);
    }
  };
}

export default PostArticle;
