import React from "react";

class TweetsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tweets: [],
		};
	}

	createTweetsList() {
		this.setState({ tweets: [this.props.tweet, ...this.state.tweets] });
	}

	componentDidUpdate(prevProps) {
		if (prevProps.tweet !== this.props.tweet) {
			this.createTweetsList();
			this.createItem()
		}
	}
	
	createItem() {
		localStorage.setItem("saved", JSON.stringify(this.state.tweets));
	}
	
	readValue() {
		let x = localStorage.getItem("saved");
		console.log("x")
		let savedItems = JSON.parse(x)
		console.log("this.state.tweets")
		console.log(this.state.tweets)
		this.setState({tweets: savedItems})
	}


	componentDidMount(){
		this.readValue()
		console.log("componentDidMount")

	}

	render() {
		const { tweet } = this.props;
		console.log(this.state.tweets);
		const { tweets } = this.state;
		return (
			<div>
				<ul className="tweets-ul">
					{tweets.map((tweet) => (
						<li key={tweet.id} className="tweet-in-list">
							<div className="name-date">
							<span>{tweet.user}</span>
							<span>{tweet.date}</span>
							</div>
							<div className="tweet-text">{tweet.text}</div>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default TweetsList;
