import React, { Component } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { UserContext } from "../contexts/UserContext";

class ArticlesList extends Component {
  static contextType = UserContext;

  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchArticles();
  }

  render() {
    const { user } = this.context;
    const { articles, isLoading } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <>
        <div className="article-list">
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
        {this.props.children}
      </>
    );
  }

  fetchArticles = () => {
    getArticles().then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default ArticlesList;
