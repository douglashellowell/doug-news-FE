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
    <li className="article-card">
      <div className="article-card-sidebar">
        <div className="article-card-votes">
          <Voter
            votes={votes}
            id={article_id}
            target={"articles"}
            disabled={user === author}
          />
        </div>
        <div>
          <i class="fas fa-comments article-card-comments"></i>
          <p>{comment_count}</p>
        </div>
      </div>

      <div className="article-card-topic">{topic}</div>
      <Link to={`/articles/${article_id}`} className="article-card-title">
        <h3>{title}</h3>
      </Link>

      <div className="article-card-posted-info">
        <p>
          <span className="article-secondary-text">Created by:</span> {author}
        </p>
        <p>
          <span className="article-secondary-text">on:</span>
          {created_at}
          {/* TODO: make util to translate date */}
        </p>
      </div>
    </li>
  );
};

export default ArticleCard;
