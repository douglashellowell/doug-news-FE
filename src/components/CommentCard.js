import React from "react";
import Voter from "./Voter";

const CommentCard = ({ comment, index, currentUser, removeComment }) => {
  const { body, author, created_at, votes, comment_id } = comment;
  return (
    <li className="comment-card" key={comment_id}>
      <div className="comment-sidebar">
        <div className="comment-user-img" />
        {currentUser !== author && (
          <Voter votes={votes} id={comment_id} target={"comments"} />
        )}
      </div>
      <div className="comment-user">
        <p>
          <span className="article-secondary-text">by </span>
          {author}
        </p>
        <p>
          <span className="article-secondary-text">at:</span>
          {created_at}
        </p>
      </div>
      <p className="comment-body">{body}</p>
      {currentUser === author && (
        <button
          className="remove-comment"
          onClick={() => removeComment(comment_id, "comments", index)}
        >
          delete
        </button>
      )}
    </li>
  );
};

export default CommentCard;
