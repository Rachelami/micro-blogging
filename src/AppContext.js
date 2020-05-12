import React from 'react';

const AppContext = React.createContext(
    {
  tweetsList: [],
  onTweetPost: (newTweet) => { }
}
);

export default AppContext;
