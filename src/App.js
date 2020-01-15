import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import ArticlesList from "./components/ArticlesList";
import ArticleView from "./components/ArticleView";
import ErrorPage from "./components/ErrorPage";
import Topics from "./components/Topics";
// import PostArticle from "./components/PostArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <main id="main-column">
        <Router>
          <Welcome path="/" />
          <ArticlesList path="/articles/" />
          <ArticleView path="/articles/:article_id" />
          <Topics path="/topics" />
          <ErrorPage default />
        </Router>
      </main>
    </div>
  );
}

export default App;
