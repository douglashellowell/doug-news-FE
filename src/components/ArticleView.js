import React, { Component } from "react";
import { getSingleArticle } from "../api";
import CommentList from "./CommentList";
import BackButton from "./BackButton";
import Loading from "./Loading";
import ErrorPage from "./NotFoundErrorPage";

class ArticleView extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true,
    notFound: false,
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
      notFound
    } = this.state;
    const { mobileView } = this.props;
    if (isNaN(+this.props.article_id)) return <ErrorPage err={'Invalid Article ID, must be a number'} />
    if (isLoading) return <Loading />;
    if (notFound) return <ErrorPage />;
    return (
      <>
        <article
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
        </article>
      </>
    );
  }

  fetchArticleWithComments = () => {
    getSingleArticle(this.props.article_id)
      .then(article => {
        this.setState({ article, isLoading: false, notFound: false }, () => {});
      })
      .catch(err => {
        this.setState({ isLoading: false, notFound: true });
      });
  };
}

export default ArticleView;
