import React, { Component } from "react";
import { insertComment } from "../api";
import { UserContext } from "../contexts/UserContext";

class SubmitComment extends Component {
  state = { titleInput: "", bodyInput: "", showForm: false };
  static contextType = UserContext;
  render() {
    const { bodyInput, showForm } = this.state;
    const { currentUser } = this.context;
    return (
      <div id="submit-comment-container">
        <button
          className={showForm ? "toggle-show-true" : "toggle-show-false"}
          onClick={this.toggleShowForm}
        >{`${showForm ? "Cancel" : `Post comment as ${currentUser}`}`}</button>
        {showForm && (
          <form onSubmit={this.SubmitComment}>
            <textarea
              type="text"
              name="bodyInput"
              onChange={this.handleChange}
              value={bodyInput}
              id="submit-comment-field"
            />
            <button id="submit-comment-button" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
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
    const { currentUser } = this.context;
    const { pushComment } = this.props;
    if (bodyInput) {
      this.setState({ bodyInput: "", showForm: false });
      const { article_id } = this.props;
      insertComment(article_id, { username: currentUser, body: bodyInput })
        .then(comment => {
          pushComment(comment);
        })
        .catch(err => {
          console.dir(err);
        });
    }
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
}

export default SubmitComment;
