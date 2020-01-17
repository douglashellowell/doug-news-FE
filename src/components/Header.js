import React from "react";
import { Link } from "@reach/router";
import Nav from "./Nav";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
  return (
    <UserContext.Consumer>
      {context => {
        const { users, setLoggedInUser } = context;
        return (
          <>
            <header id="app-header">
              <Link to="/">
                <h1 id="app-logo">doug-news</h1>
              </Link>
              <section id="logged-in-user">
                <select
                  onChange={({ target: { value } }) => setLoggedInUser(value)}
                >
                  {users.map(user => {
                    return <option key={user.username}>{user.username}</option>;
                  })}
                </select>

                <div id="logged-in-user-pic"></div>
              </section>
            </header>
            <Nav />
          </>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Header;
