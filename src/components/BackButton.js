import React from "react";
import { Link } from "@reach/router";

const BackButton = () => {
  return (
    <Link to="/articles">
      <button className="back-button">
        <i class="fas fa-caret-left"></i> back
      </button>
    </Link>
  );
};

export default BackButton;
