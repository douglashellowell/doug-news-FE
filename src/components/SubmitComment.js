import React, { Component } from "react";
import { insertComment } from "../api";
import { UserContext } from "../contexts/UserContext";

class SubmitComment extends Component {
  state = { titleInput: "", bodyInput: "", showForm: false };
  static contextType = UserContext;
  render() {
    const { bodyInput, showForm } = this.state;
    const { user } = this.context;
    return (
      <>
        <button onClick={this.toggleShowForm}>{`${
          showForm ? "Cancel" : `Post comment as ${user}`
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
    const { user } = this.context;
    if (bodyInput) {
      this.setState({ bodyInput: "" });
      const { article_id } = this.props;
      insertComment(article_id, { username: user, body: bodyInput })
        .then(comment => {
          this.props.pushComment(comment);
        })
        .catch(err => {
          console.dir(err);
        });
    }
  };

  handleChange = ({ target: { value, name } }) => {
    console.log(name, value);
    this.setState({ [name]: value });
  };
}

export default SubmitComment;
