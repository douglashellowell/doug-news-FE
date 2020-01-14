import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import ArticlesList from './components/ArticlesList';
import ArticleView from './components/ArticleView';

function App() {
	return (
		<div className="App">
			<Header />
			<main id="main-column">
				<Router>
					<Welcome path="/" />
					<ArticlesList path="/articles" />
					<ArticleView path="articles/:article_id" />
				</Router>
			</main>
		</div>
	);
}

export default App;
