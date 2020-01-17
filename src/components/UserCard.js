import React from "react";
import { Link } from "@reach/router";

const UserCard = props => {
  const {
    user: { username, name, avatar_url },
    setFilter
  } = props;
  return (
    <li className="user-card">
      <Link to="/articles">
        <div onClick={() => setFilter("author", username)}>
          <img
            src={avatar_url}
            alt={`${username}s profile`}
            className="profile-pic-med"
          />
          <h4 className="user-card-username">{username}</h4>
          <p className="user-card-name">{name}</p>
        </div>
      </Link>
    </li>
  );
};

export default UserCard;
