import SubmitComment from "./SubmitComment";
import { getArticleComments } from "../api";
import Voter from "./Voter";

import React, { Component } from "react";

class CommentList extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.article_id !== this.props.article_id) {
      console.log("updating!");
      this.fetchComments();
    }
  }

  render() {
    const { comments } = this.state;
    const { article_id } = this.props;
    return (
      <>
        <SubmitComment pushComment={this.pushComment} article_id={article_id} />
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
                <Voter votes={votes} id={comment_id} target={"comments"} />
              </li>
            );
          })}
        </ul>
      </>
    );
  }
  pushComment = newComment => {
    this.setState(currentState => {
      return { comments: [newComment, ...currentState.comments] };
    });
  };

  fetchComments = () => {
    getArticleComments(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  };
}

export default CommentList;
