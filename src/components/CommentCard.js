import React from "react";
import Voter from "./Voter";

const CommentCard = ({ comment, index, user, removeComment }) => {
  const { body, author, created_at, votes, comment_id } = comment;
  console.log(removeComment);
  return (
    <li className="comment-card" key={comment_id}>
      <div className="comment-sidebar">
        <div className="comment-user-img" />
        <Voter votes={votes} id={comment_id} target={"comments"} />
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
      {user === author && (
        <button onClick={() => removeComment(comment_id, "comments", index)}>
          delete
        </button>
      )}
    </li>
  );
};

export default CommentCard;
