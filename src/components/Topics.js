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
      <section>
        <ul>
          {topics.map(topic => {
            return (
              <li>
                <h3>{topic.slug}</h3>
                <p>{topic.description}</p>
              </li>
            );
          })}
        </ul>
      </section>
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
