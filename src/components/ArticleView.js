import React, { Component } from "react";
import { getSingleArticle } from "../api";
import CommentList from "./CommentList";
import SubmitComment from "./SubmitComment";
import BackButton from "./BackButton";
import Loading from "./Loading";

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
      isLoading
    } = this.state;
    const { mobileView } = this.props;
    if (isNaN(+this.props.article_id)) return <p>Needs a number!</p>;
    if (isLoading) return <Loading />;
    return (
      <>
        <div
          className={`article-view-container${
            mobileView ? " article-view-mobile" : ""
          }`}
        >
          <BackButton />
          <p>{topic}</p>
          <h2 className="article-view-title">{title}</h2>
          <div className="article-info">
            <p>
              <span className="article-secondary-text">By: </span>
              {author}
            </p>
            <p>
              <span className="article-secondary-text">at</span>
              {created_at}
            </p>
          </div>
          <p className="article-body">{body}</p>
          <CommentList article_id={article_id} />
        </div>
      </>
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
