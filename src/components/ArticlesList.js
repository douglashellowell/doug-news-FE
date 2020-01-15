import React, { Component } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchArticles();
  }

  render() {
    console.log(this.props.path);
    const { articles, isLoading } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <>
        <ul id="article-ul">
          {articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
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
