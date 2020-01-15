import React, { Component } from "react";
import { insertComment } from "../api";
import { UserContext } from "../contexts/UserContext";

class SubmitComment extends Component {
  state = { titleInput: "", bodyInput: "", showForm: false };

  render() {
    const { bodyInput, showForm } = this.state;
    return (
      <UserContext.Consumer>
        {context => {
          const { user } = context;
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
        }}
      </UserContext.Consumer>
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
      insertComment(article_id, { body: bodyInput })
        .then(comment => {
          this.props.pushArticle(comment);
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
