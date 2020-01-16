import React from "react";

const UserCard = props => {
  const { username, name, avatar_url } = props.user;
  return (
    <li className="user-card">
      <img
        src={avatar_url}
        alt={`${username}s profile picture`}
        className="profile-pic-med"
      />
      <h4 className="user-card-username">{username}</h4>
      <p className="user-card-name">{name}</p>
    </li>
  );
};

export default UserCard;
