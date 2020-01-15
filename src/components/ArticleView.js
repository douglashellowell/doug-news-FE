import React, { Component } from "react";
import { getSingleArticle } from "../api";
import { Link } from "@reach/router";
import CommentList from "./CommentList";
import SubmitComment from "./SubmitComment";

class ArticleView extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true,
    mobile: true
  };

  componentDidMount() {
    this.fetchArticleWithComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.article_id !== this.props.article_id) {
      this.fetchArticleWithComments();
    }
  }

  render() {
    const {
      article: { topic, title, author, created_at, body, article_id },
      isLoading,
      mobile, // <<<< for resizing
      comments
    } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <div className="article-view-container">
        <Link to="/articles">
          <button>back</button>
        </Link>
        <p>{topic}</p>
        <h2>{title}</h2>
        <p>
          <span className="article-secondary-text">By: </span>
          {author}
        </p>
        <p>
          <span className="article-secondary-text">at</span>
          {created_at}
        </p>
        <p>{body}</p>
        <CommentList article_id={article_id} />
      </div>
    );
  }

  fetchArticleWithComments = () => {
    getSingleArticle(this.props.article_id)
      .then(article => {
        this.setState({ article, isLoading: false }, () => {});
      })
      .catch(err => {
        console.dir(err);
      });
  };
}

export default ArticleView;
