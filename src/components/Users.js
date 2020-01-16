import React, { Component } from "react";
import { getAllUsers } from "../api";
import BackButton from "./BackButton";
import UserCard from "./UserCard";
import { useWindowSize } from "../App";

class Users extends Component {
  state = {
    users: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchAllUsers();
  }

  render() {
    const { users, isLoading } = this.state;
    if (isLoading) return <p>...Loading....</p>;
    return (
      <div>
        <BackButton />
        <h3>Users!</h3>
        <ul>
          {users.map(user => {
            return <UserCard user={user} key={user.username} />;
          })}
        </ul>
      </div>
    );
  }

  fetchAllUsers = () => {
    getAllUsers().then(users => {
      this.setState({ users, isLoading: false });
    });
  };
}

export default Users;
