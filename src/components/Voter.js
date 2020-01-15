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
        <i className="fas fa-caret-up" onClick={() => this.castVote(1)}></i>
        <p>{votes + castVote}</p>
        <i className="fas fa-caret-down" onClick={() => this.castVote(-1)}></i>
      </div>
    );
  }

  castVote = vote => {
    this.setState({ castVote: vote });
    const { target, id } = this.props;
    api
      .patchVote(target, id, vote)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
        this.setState({ castVote: 0 });
      });
  };
}

export default Voter;
