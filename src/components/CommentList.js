import SubmitComment from "./SubmitComment";
import { getArticleComments, deleteById } from "../api";
import { UserContext } from "../contexts/UserContext";

import React, { Component } from "react";
import CommentCard from "./CommentCard";

class CommentList extends Component {
  state = {
    comments: []
  };
  static contextType = UserContext;

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.article_id !== this.props.article_id) {
      this.fetchComments();
    }
  }

  render() {
    const { comments } = this.state;
    const { article_id } = this.props;
    const { user } = this.context;
    return (
      <>
        <SubmitComment pushComment={this.pushComment} article_id={article_id} />
        <p>Comments:</p>
        <ul>
          {comments.map((comment, index) => {
            return (
              <CommentCard
                comment={comment}
                index={index}
                user={user}
                key={comment.comment_id}
                removeComment={this.removeComment}
              />
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

  removeComment = (comment_id, target, index) => {
    deleteById(comment_id, target).then(response => {
      if (response === 204) {
        this.setState(currentState => {
          currentState.comments.splice(index, 1);
          return { comments: currentState.comments };
        });
      }
    });
  };
}

export default CommentList;
