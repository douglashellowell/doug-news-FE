import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import ArticlesList from "./components/ArticlesList";
import ErrorPage from "./components/NotFoundErrorPage";
import UserContextProvider from "./contexts/UserContext";
import WindowContextProvider from "./contexts/WindowContext";

function App() {
  return (
    <WindowContextProvider>
      <div className="App">
        <UserContextProvider>
          <Header />
          <Router className="main-column">
            <Welcome path="/" />
            <ArticlesList path="/articles/*" />
            <ErrorPage default />
          </Router>
        </UserContextProvider>
      </div>
    </WindowContextProvider>
  );
}

export default App;
