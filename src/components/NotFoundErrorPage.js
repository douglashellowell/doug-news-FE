import React from "react";

const ErrorPage = ({ err }) => {
  return (
    <div>
<h2 className="404-not-found">Page not found... {err}</h2>
    </div>
  );
};

export default ErrorPage;
