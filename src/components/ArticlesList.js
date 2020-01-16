import React, { Component } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { WindowContext } from "../contexts/WindowContext";
import { Router } from "@reach/router";
import ArticleView from "./ArticleView";
import Topics from "./Topics";
import ArticleStats from "./ArticleStats";
import Users from "./Users";

class ArticlesList extends Component {
  state = {
    articles: [],
    page: 1, // TODO,
    category: undefined,
    filter: undefined,
    sort_by: undefined,
    isLoading: true
  };
  static contextType = WindowContext;
  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, category, filter } = this.state;
    const diffCategory = category !== prevState.category;
    const diffFilter = filter !== prevState.filter;
    const diffSort_by = sort_by !== prevState.sort_by;
    if (diffCategory || diffFilter || diffSort_by) {
      this.fetchArticles(sort_by, category, filter);
    }
  }

  render() {
    const { articles, isLoading, category, filter } = this.state;
    const { height, width } = this.context;
    const mobileView = width < 725;
    return (
      <>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div
            className={`article-list${
              mobileView ? " article-list-mobile" : ""
            }`}
          >
            <p>
              <span id="category-text">{`${filter || "All"}`}</span> Articles
            </p>
            <select
              onChange={({ target: { value } }) =>
                this.setState({ sort_by: value })
              }
            >
              <option>created_at</option>
              <option>votes</option>
              <option>comment_count</option>
            </select>
            <ul id="article-ul">
              {articles.map(article => {
                return (
                  <ArticleCard article={article} key={article.article_id} />
                );
              })}
            </ul>
          </div>
        )}
        <Router>
          <ArticleView path=":article_id" mobileView={mobileView} />
          <ArticleStats default articles={articles} />
          <Topics
            path="/topics"
            setFilter={this.setFilter}
            mobileView={mobileView}
          />
          <Users path="/users" mobileView={mobileView} />
        </Router>
      </>
    );
  }

  setFilter = (category, filter) => {
    this.setState({ category, filter, isLoading: true });
  };

  fetchArticles = (sort_by, category, filter) => {
    getArticles(sort_by, category, filter)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        console.dir(err);
      });
  };
}

export default ArticlesList;
