import React from "react";
import CreateTweet from "./components/Create-tweet";
import TweetsList from "./components/Tweets-list";
import { postData, getData } from "./lib/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/Create-tweet.css";
import "./css/Tweets-list.css";
import Loader from "./components/Loader";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/Navbar.css";
import Navbar from "./components/Navbar";
import AppContext from "./AppContext";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			list: [],
			loading: false,
		};
		this.handleOnTweet = this.handleOnTweet.bind(this);
	}

	componentDidMount() {
		this.getDataFunc();
	}

	async getDataFunc() {
		console.log("update");
		await getData().then((response) => {
			this.setState({
				list: response.data.tweets,
			});
		});
		this.intervalID = setTimeout(this.getDataFunc.bind(this), 10000);
	}

	componentWillUnmount() {
		clearTimeout(this.intervalID);
	}

	handleOnTweet(tweet) {
		const { list } = this.state;
		this.setState({ loading: true });
		postData(tweet).then((response) => {
			this.setState({ list: [tweet.tweet, ...list], loading: false });
		});
	}

	render() {
		const { loading, list } = this.state;

		return (
			<div className="App background">
				<div>
					<Router>
						<div className="row">
							<div className="col-md-10 offset-md-1 col-sm-12">
								<Navbar />
							</div>
						</div>
						<Switch>
							<Route path="/profile">
								<Profile />
							</Route>
							<Route path="/">
								<div className="row">
									<div className="col-md-6 offset-md-3 col-sm-12">
										<AppContext.Provider
											value={{
												tweetsList: list,
												onTweetPost: (tweet) => {
													this.handleOnTweet(tweet);
												},
											}}
										>
											<CreateTweet />
											{loading && <Loader />}
											<TweetsList />
										</AppContext.Provider>
									</div>
								</div>
							</Route>
						</Switch>
					</Router>
				</div>
			</div>
		);
	}
}

export default App;
