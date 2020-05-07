import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

class CreateTweet extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: "",
			text: "",
			id: 0,
		};
	}

	updateTimeAndId() {
		let date = new Date().toString();
		this.setState({ date: date, id: this.state.id + 1 });
	}

	handleSubmit(event) {
		const { text, date, id } = this.state;
		event.preventDefault();
		let tweet = {
			date: date,
			text: text,
			user: "Rachel Ouday",
			id: id,
		};
		this.props.handleOnTweet(tweet);
	}

	render() {
		const { text } = this.state;
		console.log(this.state.text);

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
								value={text}
								onChange={(event) =>
									this.setState({ text: event.target.value })
								}
							/>
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
									onClick={() => this.updateTimeAndId()}
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
