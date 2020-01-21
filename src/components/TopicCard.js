import React from "react";
import { Link } from "@reach/router";

const TopicCard = ({
  topic: { slug, description, count },
  setFilter,
  filter
}) => {
  const isFiltered = filter === slug;

  return (
    <Link to="/articles" key={slug}>
      <li
        className="topic-card"
        onClick={() => {
          !isFiltered && setFilter("topic", slug);
        }}
      >
        <h3>{slug}</h3>
        <p>{description}</p>
        <p>there are {count} articles for this topic</p>
      </li>
    </Link>
  );
};

export default TopicCard;
