import React from 'react';
import CreateTweet from './components/Create-tweet';
import TweetsList from './components/Tweets-list';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/Create-tweet.css'
import './css/Tweets-list.css'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            list: [],
            newDate: '',
            text: '',
            currentTweet: []
    };
    this.handleOnTweet = this.handleOnTweet.bind(this)
	}

handleOnTweet(tweet) {
  console.log(tweet);
  this.setState({ currentTweet: tweet });
}

  render() {
  return (
    <div className="App background">
      <div className="row">
        <div className="col-6 offset-3">
        <CreateTweet handleOnTweet={this.handleOnTweet} />
        <TweetsList tweet={this.state.currentTweet}/>

        </div>
    </div>
    </div>
  );
}
}

export default App;
