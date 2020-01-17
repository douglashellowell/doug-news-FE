import React from "react";
import { Link } from "@reach/router";

const Welcome = () => {
  return (
    <main id="welcome-container">
      <h2>Welcome</h2>
      <p>
        Welcome to doug-news!
        <br />
        This React app has a Node.js backend connecting to a PSQL database using
        express and knex
      </p>
      <Link to="/articles">
        <button>Explore Articles >>></button>
      </Link>
    </main>
  );
};

export default Welcome;
