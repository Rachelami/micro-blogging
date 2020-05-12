import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import AppContext from "../AppContext";

class CreateTweet extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
			button: true,
		};
	}

	handleSubmit(event, callback) {
		this.setState({ button: true });
		const { text } = this.state;
		if (localStorage.getItem("userName") === null) {
			localStorage.setItem("userName", "Anonymous");
		}
		event.preventDefault();
		let tweet = {
			tweet: {
				date: new Date().toISOString(),
				content: text,
				userName: localStorage.getItem("userName"),
			},
		};
		this.setState({ text: "" });
		callback(tweet);
	}

	changeButton(event) {
		const { text } = this.state;
		this.setState({ text: event.target.value, button: false });
		if (text.length > 140 || event.target.value.length < 1) {
			this.setState({ button: true });
		} else {
			this.setState({ button: false });
		}
	}

	render() {
		const { text, button } = this.state;
		return (
			<div>
				<AppContext.Consumer>
					{({ onTweetPost }) => (
						<div className="tweet-box background">
							<Form onSubmit={(event) => this.handleSubmit(event, onTweetPost)}>
								<Form.Group
									className="tweet-input"
									controlId="exampleForm.ControlTextarea1"
								>
									<Form.Control
										placeholder="What you have in mind..."
										type="text"
										className="tweet-input2 background"
										as="textarea"
										rows="3"
										value={text}
										onChange={(event) => this.changeButton(event)}
									/>
								</Form.Group>
								<div className="flex-end">
									<Button
										type="submit"
										className="tweet-button"
										variant="primary"
										size="sm"
										disabled={button}
									>
										Tweet
									</Button>
								</div>
							</Form>
						</div>
					)}
				</AppContext.Consumer>
			</div>
		);
	}
}

export default CreateTweet;
