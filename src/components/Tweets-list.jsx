import React from "react";
import AppContext from "../AppContext";

function TweetsList(props) {
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

export default TweetsList;
