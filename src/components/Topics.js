import React, { Component } from "react";
import { getTopics } from "../api";
import BackButton from "./BackButton";
import { WindowContext } from "../contexts/WindowContext";
import { Link } from "@reach/router";

class Topics extends Component {
  state = {
    topics: [],
    isLoading: true
  };
  static contextType = WindowContext;

  componentDidMount() {
    this.fetchAllTopics();
  }

  render() {
    const { topics, isLoading } = this.state;
    const { setFilter, mobileView } = this.props;
    if (isLoading) return <p>Loading.....</p>;
    return (
      <div
        className={`topic-list-container${
          mobileView ? " topic-list-mobile" : ""
        }`}
      >
        <BackButton />
        <ul id="topic-list">
          {topics.map(topic => {
            return (
              <Link to="/articles">
                <li
                  className="topic-card"
                  key={topic.slug}
                  onClick={() => {
                    setFilter("topic", topic.slug);
                  }}
                >
                  <h3>{topic.slug}</h3>
                  <p>{topic.description}</p>
                  <p>there are {topic.count} articles for this topic</p>
                </li>
              </Link>
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
