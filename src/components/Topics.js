import React, { Component } from "react";
import { getTopics } from "../api";
import BackButton from "./BackButton";
import { WindowContext } from "../contexts/WindowContext";
import Loading from "./Loading";
import TopicCard from "./TopicCard";

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
    const { setFilter, mobileView, filter } = this.props;
    if (isLoading) return <Loading />;
    return (
      <div
        className={`topic-list-container${
          mobileView ? " topic-list-mobile" : ""
        }`}
      >
        <BackButton />
        <ul id="topic-list">
          {topics.map((topic, index) => {
            return (
              <TopicCard
                topic={topic}
                setFilter={setFilter}
                key={index}
                filter={filter}
              />
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
