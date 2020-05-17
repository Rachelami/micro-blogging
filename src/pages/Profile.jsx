import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			goHome: false,
		};
	}


	handleOnSubmit() {
		const { username } = this.state;
		localStorage.setItem("userName", username);
		this.setState({ goHome: true });
	}

	render() {
		return (
			<div className="col-6 offset-3 white">
				<div className="flex profile-down">
					<h1>Profile</h1>
				</div>

				<Form onSubmit={(event) => this.handleOnSubmit(event)}>
					<Form.Group controlId="formBasic">
						<div className="flex">
							<Form.Label>User Name</Form.Label>
						</div>
						<Form.Control
						className="profile-height"
							type="text"
							placeholder={localStorage.getItem("userName")}
							onChange={(event) =>
								this.setState({ username: event.target.value })
							}
						/>
						<div className="flex right">
							<Button variant="primary" type="submit">
								{this.state.goHome === true && <Redirect to="/" />}
								Submit
							</Button>
						</div>
					</Form.Group>
				</Form>
			</div>
		);
	}
}

export default Profile;
