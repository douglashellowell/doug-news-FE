import React, { Component } from "react";
import { getSingleArticle } from "../api";
import SubmitComment from "./SubmitComment";
import { Link } from "@reach/router";

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
    console.log(prevProps);
    if (prevProps.article_id !== this.props.article_id) {
      console.log("updating!");
      this.fetchArticleWithComments();
    }
  }

  render() {
    const {
      article: { topic, title, author, created_at, body, article_id },
      isLoading,
      mobile,
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
        <SubmitComment article_id={article_id} />
        <p>Comments:</p>

        <ul>
          {comments.map(comment => {
            const { body, author, created_at, votes, comment_id } = comment;
            return (
              <li className="comment-li" key={comment_id}>
                <p>{body}</p>
                <p>
                  <span className="article-secondary-text">by </span>
                  {author}
                </p>
                <p>
                  <span className="article-secondary-text">at:</span>
                  {created_at}
                </p>
                <p>votes: {votes}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  fetchArticleWithComments = () => {
    console.log("fetching article");
    getSingleArticle(this.props.article_id)
      .then(([article, comments]) => {
        console.log(article);
        console.log(comments);
        this.setState({ article, comments, isLoading: false }, () => {});
      })
      .catch(err => {
        console.dir(err);
      });
  };
}

export default ArticleView;
