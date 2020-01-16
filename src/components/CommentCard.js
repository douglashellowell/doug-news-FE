import React from "react";
import Voter from "./Voter";

const CommentCard = ({ comment, index, user }) => {
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
      {user === author && (
        // <DeleteButton id={comment_id} target={"comments"} onClick={}/>
        <button
          onClick={() => this.removeComment(comment_id, "comments", index)}
        >
          delete
        </button>
      )}
      <Voter votes={votes} id={comment_id} target={"comments"} />
    </li>
  );
};

export default CommentCard;
