import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";

const ArticleCard = props => {
  const {
    topic,
    title,
    author,
    created_at,
    comment_count,
    votes,
    article_id
  } = props.article;
  const { user } = props;
  return (
    <li className="article-li">
      <div className="article-li-top">{topic}</div>
      <Link to={`/articles/${article_id}`}>
        <h3 className="article-li-title">{title}</h3>
      </Link>
      <div className="article-li-extras">
        <p>
          <span className="article-secondary-text">Created by:</span> {author}
        </p>
        <p>
          <span className="article-secondary-text">on:</span>
          {created_at}
          {/* TODO: make util to translate date */}
        </p>
        <p>{comment_count} comments</p>
        <Voter
          votes={votes}
          id={article_id}
          target={"articles"}
          disabled={user === author}
        />
      </div>
    </li>
  );
};

export default ArticleCard;
