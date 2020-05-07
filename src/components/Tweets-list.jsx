import React from "react";

class TweetsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tweets: [],
			isItEmpty: true,
		};
	}

	createTweetsList() {
		this.setState({ tweets: [this.props.tweet, ...this.state.tweets] });
		this.createItem();

	}

	componentDidUpdate(prevProps) {
		if (prevProps.tweet !== this.props.tweet) {
			this.createTweetsList();
		}
	}

	createItem() {
		localStorage.setItem("saved", JSON.stringify(this.state.tweets));
	}

	readValue() {
		let x = localStorage.getItem("saved");
		let savedItems = JSON.parse(x);
		{
			savedItems !== null &&
				this.setState({ tweets: savedItems, isItEmpty: false });
		}
	}

	componentDidMount() {
		// {this.setState({isItEmpty: true })}
		{
			this.state.isItEmpty === true && this.readValue();
		}
		console.log("componentDidMount");
	}

	sortByDate() {
		if (this.state.tweets !== null) {
			const SortedByDate = this.state.tweets.sort((a, b) => b.date - a.date);
			return SortedByDate;
		}
	}

	render() {
		const { tweet } = this.props;
		const { tweets, isItEmpty } = this.state;
		const sortedTweets = this.sortByDate();
		return (
			<div>
				{sortedTweets !== undefined && (
					<ul className="tweets-ul">
						{sortedTweets.map((tweet) => (
							<li key={tweet.id} className="tweet-in-list">
								<div className="name-date">
									<span>{tweet.user}</span>
									<span>{tweet.date}</span>
								</div>
								<div className="tweet-text">{tweet.text}</div>
							</li>
						))}
					</ul>
				)}
			</div>
		);
	}
}

export default TweetsList;
