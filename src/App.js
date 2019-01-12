import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import logo from "./logo.svg";
import "./App.scss";
import AppRouter from "./router";

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
						<AppRouter />
					</Grid>
				</main>
			</div>
		);
	}
}

export default App;
