import React, { Component } from "react";
import * as api from "../api";

class Voter extends Component {
  state = {
    castVote: 0
  };
  render() {
    const { votes, disabled } = this.props;
    const { castVote } = this.state;
    const upvoted = castVote === 1;
    const downvoted = castVote === -1;

    if (disabled) return null;
    return (
      <div className="voter-container">
        <i
          className={`fas fa-caret-up${upvoted ? " upvoted" : ""}`}
          onClick={() => this.castVote(1)}
        ></i>
        <p>{votes + castVote}</p>
        <i
          className={`fas fa-caret-down${downvoted ? " downvoted" : ""}`}
          onClick={() => this.castVote(-1)}
        ></i>
      </div>
    );
  }

  castVote = vote => {
    const { castVote } = this.state;
    if (castVote === vote) {
      this.setState({ castVote: 0 });
      vote *= -1;
    } else {
      this.setState({ castVote: vote });
    }
    const { target, id } = this.props;
    api.patchVote(target, id, vote).catch(err => {
      this.setState({ castVote: 0 });
    });
  };
}

export default Voter;
