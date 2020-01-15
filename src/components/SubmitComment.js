import React, { Component } from "react";
import { insertComment } from "../api";

class SubmitComment extends Component {
  state = { titleInput: "", bodyInput: "", showForm: false };
  render() {
    const { bodyInput, showForm } = this.state;
    return (
      <>
        <button onClick={this.toggleShowForm}>{`${
          showForm ? "Cancel" : "Post comment"
        }`}</button>
        {showForm && (
          <form onSubmit={this.SubmitComment}>
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
      return { showForm: !currentState.showForm };
    });
  };

  SubmitComment = event => {
    event.preventDefault();
    const { bodyInput } = this.state;
    if (bodyInput) {
      const { article_id } = this.props;
      insertComment(article_id, { body: bodyInput }).then(comment => {});
    }
  };

  handleChange = ({ target: { value, name } }) => {
    console.log(name, value);
    this.setState({ [name]: value });
  };
}

export default SubmitComment;
