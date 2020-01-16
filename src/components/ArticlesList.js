import React, { Component } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { UserContext } from "../contexts/UserContext";
import { Router } from "@reach/router";
import ArticleView from "./ArticleView";
import Topics from "./Topics";
import ArticleStats from "./ArticleStats";
import Users from "./Users";

class ArticlesList extends Component {
  static contextType = UserContext;

  state = {
    articles: [],
    page: 1, // TODO,
    filter: "",
    order: "",
    isLoading: true
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { filter } = this.state;
    const diffFilter = filter !== prevState.filter;
    if (diffFilter) {
      console.log("if statement!");
      this.fetchArticles(null, filter);
    }
  }

  render() {
    const { user } = this.context;
    const { articles, isLoading, filter } = this.state;
    // if (isLoading) return <p>Loading...</p>;
    return (
      <>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="article-list">
            <p>
              <span id="filter-text">{`${filter || "All"}`}</span> Articles
            </p>
            <select
              onChange={({ target: { value } }) =>
                this.setState({ order: value })
              }
            >
              <option>Newest</option>
              <option>Votes</option>
              <option>Comments</option>
            </select>
            <ul id="article-ul">
              {articles.map(article => {
                return (
                  <ArticleCard
                    article={article}
                    user={user}
                    key={article.article_id}
                  />
                );
              })}
            </ul>
          </div>
        )}
        <Router>
          <ArticleView path=":article_id" />
          <ArticleStats default />
          <Topics path="/topics" setFilter={this.setFilter} />
          <Users path="/users" />
        </Router>
      </>
    );
  }

  setFilter = filter => {
    this.setState({ filter, isLoading: true });
  };

  fetchArticles = (order, filter) => {
    console.log(order);
    getArticles(order, filter).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default ArticlesList;
