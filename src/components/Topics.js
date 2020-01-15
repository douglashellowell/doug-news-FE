import React, { Component } from "react";
import { getTopics } from "../api";

class Topics extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    console.log("mounting...");
    this.fetchAllTopics();
  }

  render() {
    console.log("rendering...");
    const { topics } = this.state;
    return (
      <ul id="topic-list">
        {topics.map(topic => {
          return (
            <li className="topic-card">
              <h3>{topic.slug}</h3>
              <p>{topic.description}</p>
            </li>
          );
        })}
      </ul>
    );
  }

  fetchAllTopics = () => {
    console.log("fetching...");
    getTopics().then(topics => {
      this.setState({ topics });
    });
  };
}

export default Topics;
