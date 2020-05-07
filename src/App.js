import React from 'react';
import CreateTweet from './components/Create-tweet';
import TweetsList from './components/Tweets-list';
import { getData, postData } from './lib/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/Create-tweet.css'
import './css/Tweets-list.css'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            list: [],
    };
    this.handleOnTweet = this.handleOnTweet.bind(this)
	}

handleOnTweet(tweet) {
  console.log(tweet);
  this.setState({ currentTweet: tweet });
  postData(tweet)
}

  render() {
  return (
    <div className="App background">
      <div className="row">
        <div className="col-6 offset-3">
        <CreateTweet handleOnTweet={this.handleOnTweet} />
        <TweetsList {...this.state}/>

        </div>
    </div>
    </div>
  );
}
}

export default App;
