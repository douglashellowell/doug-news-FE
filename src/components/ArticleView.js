import React, { Component } from 'react';
import { getSingleArticle } from '../api';

class ArticleView extends Component {
	state = {
		article: {},
		comments: [],
		isLoading: true
	};

	componentDidMount() {
		this.fetchArticleWithComments();
	}

	render() {
		const { topic, title, author, created_at, body } = this.state.article;
		if (this.state.isLoading) return <p>Loading...</p>;
		return (
			<div className="article-view-container">
				<p>{topic}</p>
				<h2>{title}</h2>
				<p>
					<span className="article-secondary-text">By: </span>
					{author}
				</p>
				<p>
					<span className="article-secondary-text">at</span>
					{created_at}
				</p>
				<p>{body}</p>
				<p>Comments:</p>

				<ul>
					{this.state.comments.map(comment => {
						const { body, author, created_at, votes, comment_id } = comment;
						return (
							<li className="comment-li" key={comment_id}>
								<p>{body}</p>
								<p>
									<span className="article-secondary-text">by </span>
									{author}
								</p>
								<p>
									<span className="article-secondary-text">at:</span>
									{created_at}
								</p>
								<p>votes: {votes}</p>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}

	fetchArticleWithComments = () => {
		getSingleArticle(this.props.article_id).then(([article, comments]) => {
			console.log(article);
			console.log(comments);
			this.setState({ article, comments, isLoading: false }, () => {});
		});
	};
}

export default ArticleView;
