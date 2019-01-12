import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import logo from "./logo.svg";
import "./App.scss";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>
						Book collector
					</h1>
				</header>
				<main>
					<Grid>
						<h2>
							Lorem ipsum
						</h2>
						<p>
							dolor set elit nullum vitae.
						</p>
					</Grid>
				</main>
			</div>
		);
	}
}

export default App;
