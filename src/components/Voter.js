import React, { Component } from "react";
import * as api from "../api";

class Voter extends Component {
  state = {
    castVote: 0
  };
  render() {
    const { target, id, votes, disabled } = this.props;
    const { castVote } = this.state;
    if (disabled) return null;
    return (
      <div className="voter-container">
        <button onClick={() => this.castVote(1)}>^</button>
        <p>{votes + castVote}</p>
        <button onClick={() => this.castVote(-1)}>v</button>
      </div>
    );
  }

  castVote = vote => {
    this.setState({ castVote: vote });
    const { target, id } = this.props;
    api
      .patchVote(target, id, vote)
      .then(response => {
        console.log("");
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default Voter;
