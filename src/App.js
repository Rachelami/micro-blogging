import React from "react";
import CreateTweet from "./components/Create-tweet";
import TweetsList from "./components/Tweets-list";
import { getData, postData, loading } from "./lib/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/Create-tweet.css";
import "./css/Tweets-list.css";
import Loader from "./components/Loader";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			loading: true,
		};
		this.handleOnTweet = this.handleOnTweet.bind(this);
	}

	sleep = (milliseconds) => {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	};

	wait = async (milliseconds = 2000) => {
		await this.sleep(milliseconds);
		this.setState({
			loading: false,
		});
	};

	componentDidMount() {
		this.wait(1000);
	}

	handleOnTweet(tweet) {
		// console.log(tweet);
		// this.setState({ currentTweet: tweet });
		postData(tweet);
	}

	render() {
		const { loading } = this.state;
		return (
			<div className="App background">
				{loading && <Loader />}
				<div className="row">
					<div className="col-6 offset-3">
						<CreateTweet handleOnTweet={this.handleOnTweet} />
						<TweetsList {...this.state} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
