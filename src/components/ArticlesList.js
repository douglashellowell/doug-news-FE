import React, { Component } from 'react';
import { getArticles } from '../api';
import articles from '../dummydata/articles.json';
import ArticleCard from './ArticleCard';
import { Router } from '@reach/router';

class ArticlesList extends Component {
	state = {
		articles: articles.articles,
		isLoading: true
	};

	componentDidMount() {
		this.fetchArticles();
	}

	render() {
		console.log(this.props.path);
		const { articles, isLoading } = this.state;
		if (isLoading) return <p>Loading...</p>;
		return (
			<ul id="article-ul">
				{articles.map(article => {
					return <ArticleCard article={article} key={article.article_id} />;
				})}
			</ul>
		);
	}

	fetchArticles = () => {
		getArticles().then(articles => {
			this.setState({ articles, isLoading: false });
		});
	};
}

export default ArticlesList;
