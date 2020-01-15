import React from "react";
import { Link } from "@reach/router";
import Nav from "./Nav";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
  return (
    <UserContext.Consumer>
      {context => {
        const { user, setLoggedInUser } = context;
        return (
          <>
            <header id="app-header">
              <Link to="/">
                <h1 id="header-logo">doug-news</h1>
              </Link>
              <section id="logged-in-user">
                <button onClick={() => setLoggedInUser("weegembump")}>
                  log in as weegembump
                </button>
                <p>{user}</p>
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
