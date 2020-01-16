import React from "react";

const UserCard = props => {
  const { username, name, avatar_url } = props.user;
  return (
    <li className="user-card">
      <h4>{username}</h4>
      <p>{name}</p>
      <img src={avatar_url} alt={`${username}s profile picture`} />
    </li>
  );
};

export default UserCard;
