import React, { Component } from "react";
import { getTopics } from "../api";
import BackButton from "./BackButton";

class Topics extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchAllTopics();
  }

  render() {
    const { topics, isLoading } = this.state;
    const { setFilter } = this.props;
    if (isLoading) return <p>Loading.....</p>;
    return (
      <div className="topic-list-container">
        <BackButton />
        <ul id="topic-list">
          {topics.map(topic => {
            return (
              <li
                className="topic-card"
                key={topic.slug}
                onClick={() => setFilter(topic.slug)}
              >
                <h3>{topic.slug}</h3>
                <p>{topic.description}</p>
                <p>there are {topic.count} articles for this topic</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  fetchAllTopics = () => {
    getTopics().then(topics => {
      this.setState({ topics, isLoading: false });
    });
  };
}

export default Topics;
