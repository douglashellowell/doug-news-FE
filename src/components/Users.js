import React, { Component } from "react";
import { getAllUsers } from "../api";
import BackButton from "./BackButton";
import UserCard from "./UserCard";
import { useWindowSize } from "../App";
import Loading from "./Loading";

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
    const { setFilter, mobileView } = this.props;
    if (isLoading) return <Loading />;
    return (
      <>
        <div
          className={`user-list-container${
            mobileView ? " user-list-mobile" : ""
          }`}
        >
          <BackButton />
          <h3>Users!</h3>
          <ul id="user-list">
            {users.map(user => {
              return (
                <UserCard
                  setFilter={setFilter}
                  user={user}
                  key={user.username}
                />
              );
            })}
          </ul>
        </div>
      </>
    );
  }

  fetchAllUsers = () => {
    getAllUsers().then(users => {
      this.setState({ users, isLoading: false });
    });
  };
}

export default Users;
