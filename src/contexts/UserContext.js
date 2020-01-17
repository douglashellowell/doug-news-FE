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
    console.log('rendering!');
    return (
      <UserContext.Provider
        value={{ ...this.state, setLoggedInUser: this.setLoggedInUser }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }

  getAvailableUsers = () => {
    console.log("getting users for log in!");
    api.getAllUsers().then(users => {
      this.setState({ users });
    });
  };

  setLoggedInUser = username => {
    console.log("setting user for log in!");
    this.setState({ currentUser: username }, () => {
      console.log(this.state);
    });
  };
}

export default UserContextProvider;
