import React from "react";
import CreateTweet from "./components/Create-tweet";
import TweetsList from "./components/Tweets-list";
import { postData } from "./lib/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/Create-tweet.css";
import "./css/Tweets-list.css";
import Loader from "./components/Loader";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/Navbar.css";
import Navbar from "./components/Navbar";

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
		postData(tweet);
	}

	render() {
		const { loading } = this.state;
		return (
			<div className="App background">
				<div>
					{loading && <Loader />}
					<div className="row">
						<Router>
							<div className="col-10 offset-1">
								<Navbar />
							</div>
							<Switch>
								<Route path="/profile">
									<Profile />
								</Route>

								<Route path="/">
									<div className="col-6 offset-3">
										<CreateTweet handleOnTweet={this.handleOnTweet} />
										<TweetsList {...this.state} />
									</div>
								</Route>
							</Switch>
						</Router>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
