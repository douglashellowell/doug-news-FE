import React, { Component } from "react";
import { getStats } from "../utils/getStats";

import { Pie } from "react-chartjs-2";

class ArticleStats extends Component {
  state = {
    data: {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          data: [300, 50, 100],
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
    console.log("ArticleStats ~~~ Mounting");
    // const stats = getStats(this.props.articles);
    // console.log(stats);
  }

  componentDidUpdate(prevProps) {
    // console.log("ArticleStats ~~~~ updating");
    // console.log(prevProps.articles);
    // console.log(this.props.articles);
    if (prevProps.articles !== this.props.articles) {
      const stats = getStats(this.props.articles);
      this.setState(currentState => {
        const newState = { ...currentState };
        // console.log("newstate --->", newState);
        newState.data.labels = Object.keys(stats);
        newState.data.datasets[0].data = Object.values(stats);
        return { ...currentState };
      });
    }
  }
  render() {
    // console.log("ArticleStats ~~~ Rendering");
    // console.log(this.state);
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
