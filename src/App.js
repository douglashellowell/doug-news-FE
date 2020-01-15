import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import ArticlesList from "./components/ArticlesList";
import ArticleView from "./components/ArticleView";
import ErrorPage from "./components/ErrorPage";
import Topics from "./components/Topics";
import UserContextProvider from "./contexts/UserContext";

// window.addEventListener('resize', ()=> {

// })

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Header />
        <main>
          <Router className="main-column">
            <Welcome path="/" />
            <ArticlesList path="/articles/">
              <ArticleView path=":article_id" />
            </ArticlesList>
            <Topics path="/topics" />
            <ErrorPage default />
          </Router>
        </main>
      </UserContextProvider>
    </div>
  );
}

export default App;
