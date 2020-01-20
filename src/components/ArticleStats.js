import React, { Component } from "react";
import { getStats } from "../utils/getStats";

import { Pie } from "react-chartjs-2";

class ArticleStats extends Component {
  state = {
    data: {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [
            "#39b54a",
            "#ead637",
            "#a63c06",
            "#136f63",
            "0b132b"
          ],
          hoverBackgroundColor: [
            "#39b54a",
            "#ead637",
            "#a63c06",
            "#136f63",
            "0b132b"
          ]
        }
      ]
    }
  };

  componentDidMount() {
    const stats = getStats(this.props.articles);
    this.setState({
      data: {
        labels: Object.keys(stats),
        datasets: [{ data: Object.values(stats) }]
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.articles !== this.props.articles) {
      const stats = getStats(this.props.articles);
      this.setState(currentState => {
        const newState = { ...currentState };
        newState.data.labels = Object.keys(stats);
        newState.data.datasets[0].data = Object.values(stats);
        return { ...currentState };
      });
    }
  }
  render() {
    const { data } = this.state;
    const { filter } = this.props;
    return (
      <div>
        <h2>Article Count for: {filter} </h2>
        <Pie data={data} />
      </div>
    );
  }
}

export default ArticleStats;
