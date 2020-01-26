import React, { Component } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { WindowContext } from "../contexts/WindowContext";
import { Router } from "@reach/router";
import ArticleView from "./ArticleView";
import Topics from "./Topics";
import ArticleStats from "./ArticleStats";
import Users from "./Users";
import Loading from "./Loading";
import ErrorPage from "./NotFoundErrorPage";

class ArticlesList extends Component {
  state = {
    articles: [],
    page: 1, // TODO,
    category: undefined,
    filter: undefined,
    sort_by: undefined,
    error: false,
    errorMsg: '',
    isLoading: true,

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
    const { articles, isLoading, filter, error, errorMsg, category } = this.state;
    const { width } = this.context;
    const mobileView = width < 725;
    return (
      <>
        {isLoading ? (
          <Loading />
        ) : error ? (
          <ErrorPage err={errorMsg}/>
        ) : (
          <div
            className={`article-list${
              mobileView ? " article-list-mobile" : ""
            }`}
          >
            <div id="sidebar-title">
              <p id="filtered-by-text">
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
            </div>
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
          {!mobileView && (
            <ArticleStats path="/" category={category} filter={filter} />
          )}
          <Topics
            path="/topics"
            setFilter={this.setFilter}
            mobileView={mobileView}
            filter={filter}
          />
          <Users
            path="/users"
            mobileView={mobileView}
            setFilter={this.setFilter}
            filter={filter}
          />
          <ErrorPage default />
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
        this.setState({ articles, isLoading: false, error: false });
      })
      .catch(err => {
        this.setState({ isLoading: false, error: true, errorMsg: err.msg });
      });
  };
}

export default ArticlesList;
