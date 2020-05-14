import React from "react";
import AppContext from "../AppContext";
import { getData } from "../lib/api";


class TweetsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: ""
		};
	}

	async componentDidMount() {
		console.log("update");
		await getData().then((response) => {
			console.log(response.data.tweets)
			this.setState({
				list: response.data.tweets,
			});
		});
		this.intervalID = setTimeout(this.componentDidMount.bind(this), 10000);
	}

	componentWillUnmount() {
		clearTimeout(this.intervalID);
	}

	render() {
		return (
			<div>
				<AppContext.Consumer>
					{({ tweetsList }) => (
						<div>
							{tweetsList !== undefined && (
								<ul className="tweets-ul">
									{tweetsList.map((item) => (
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
					)}
				</AppContext.Consumer>
			</div>
		);
	}
}

export default TweetsList;
