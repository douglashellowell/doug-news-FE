import React from "react";
import { Link } from "@reach/router";

const BackButton = () => {
  return (
    <Link to="/articles">
      <button>back</button>
    </Link>
  );
};

export default BackButton;
