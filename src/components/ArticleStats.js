import React, { Component } from "react";
import { getStats } from "../utils/getStats";

import { Pie } from "react-chartjs-2";

// const data = {
//   labels: ["Red", "Blue", "Yellow"],
//   datasets: [
//     {
//       data: [300, 50, 100],
//       backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//       hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
//     }
//   ]
// };
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
    // const stats = getStats(this.props.articles);
    // console.log(stats);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.articles != this.props.articles) {
      console.log("updating!");
      const stats = getStats(this.props.articles);
      this.setState(currentState => {
        const newState = { ...currentState };
        newState.data.labels = Object.keys(stats);
        newState.data.datasets[0].data = Object.values(stats);
        return { data: { ...newState } };
      });
    }
  }
  render() {
    console.log("rendering stats!");
    const {
      data: { data }
    } = this.state;
    return (
      <div>
        <h2>Users talking about this....</h2>
        <Pie data={data} />
      </div>
    );
  }
}

export default ArticleStats;
