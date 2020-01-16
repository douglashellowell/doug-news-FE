import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import ArticlesList from "./components/ArticlesList";
import ErrorPage from "./components/ErrorPage";
import UserContextProvider from "./contexts/UserContext";

export function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function App() {
  console.log("whole app rendering...!");
  return (
    <div className="App">
      <UserContextProvider>
        <Header />
        <main>
          <Router className="main-column">
            <Welcome path="/" />
            <ArticlesList path="/articles/*" />
            <ErrorPage default />
          </Router>
        </main>
      </UserContextProvider>
    </div>
  );
}

export default App;
