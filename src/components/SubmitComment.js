import React, { Component } from "react";

class SubmitComment extends Component {
  state = { titleInput: "", bodyInput: "", showForm: false };
  render() {
    const { titleInput, bodyInput, showForm } = this.state;
    return (
      <>
        <button onClick={this.toggleShowForm}>{`${
          showForm ? "Cancel" : "Post comment"
        }`}</button>
        {showForm && (
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
      return { showForm: !currentState.showForm };
    });
  };

  handleChange = ({ target: { value, name } }) => {
    console.log(name, value);
    this.setState({ [name]: value });
  };
}

export default SubmitComment;
