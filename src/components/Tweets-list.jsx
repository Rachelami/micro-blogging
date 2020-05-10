import React from "react";
import { getData } from "../lib/api";

class TweetsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tweets: [],
			isItEmpty: true,
			newlist: [],
		};
	}

	async componentDidMount() {
		await getData().then((response) => {
			this.setState({
				list: response.data,
			});
		});
	}

	componentDidUpdate() {
		getData().then((response) => {
			this.setState({
				list: response.data,
			});
		});
	}

	// sortByDate() {
	// 	if (this.state.tweets !== null) {
	// 		const SortedByDate = this.state.tweets.sort((a, b) => b.date - a.date);
	// 		return SortedByDate;
	// 	}
	// }

	render() {
		return (
			<div>
				{this.state.list !== undefined && (
					<ul className="tweets-ul">
						{this.state.list.tweets.map((item) => (
							<li key={item.date} className="tweet-in-list">
								<div className="name-date">
									<span>{item.userName}</span>
									<span>{item.date}</span>
								</div>
								<div className="tweet-text">{item.content}</div>
							</li>
						))}
					</ul>
				)}
			</div>
		);
	}
}

export default TweetsList;
