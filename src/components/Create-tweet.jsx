import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

class CreateTweet extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: "",
			text: "",
		};
	}

	handleSubmit(event) {
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
		this.props.handleOnTweet(tweet);
	}

	render() {
		const { text } = this.state;
		return (
			<div>
				<div className="tweet-box background">
					<Form onSubmit={(event) => this.handleSubmit(event)}>
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
								// value={text}
								onChange={(event) =>
									this.setState({ text: event.target.value })
								}
							/>
							{/* {document.getElementsByClassName(tweet-input2).innerText = "What you have in mind..."} */}
						</Form.Group>
						<div className="flex-end">
							{this.state.text.length > 140 && (
								<Button
									type="submit"
									className="tweet-button"
									variant="primary"
									size="sm"
									disabled
								>
									Tweet
								</Button>
							)}
							{this.state.text.length <= 140 && (
								<Button
									type="submit"
									className="tweet-button"
									variant="primary"
									size="sm"
									active
								>
									Tweet
								</Button>
							)}
						</div>
					</Form>
				</div>
			</div>
		);
	}
}

export default CreateTweet;
