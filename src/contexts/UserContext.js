import React, { createContext, Component } from "react";

export const UserContext = createContext();

class UserContextProvider extends Component {
  state = {
    user: "jessjelly"
  };
  render() {
    return (
      <UserContext.Provider
        value={{ ...this.state, setLoggedInUser: this.setLoggedInUser }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }

  setLoggedInUser = username => {
    this.setState({ user: username });
  };
}

export default UserContextProvider;
