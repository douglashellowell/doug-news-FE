import React, { createContext, Component } from "react";
import * as api from "../api";

export const UserContext = createContext();

class UserContextProvider extends Component {
  state = {
    currentUser: "jessjelly",
    users: []
  };

  componentDidMount() {
    this.getAvailableUsers();
  }
  render() {
    return (
      <UserContext.Provider
        value={{ ...this.state, setLoggedInUser: this.setLoggedInUser }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }

  getAvailableUsers = () => {
    api.getAllUsers().then(users => {
      this.setState({ users, currentUser: users[0].username });
    });
  };

  setLoggedInUser = username => {
    this.setState({ currentUser: username }, () => {});
  };
}

export default UserContextProvider;
