import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import { Button, Grid } from "react-bootstrap";
import logo from "./logo.svg";
import "./App.scss";
import AppRouter from "./router";

class App extends Component {
	render() {
		return (
			<Router><div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>
						<Link to="/">Books</Link>
					</h1>
					<div className="App-action">
						<Button bsStyle="primary" href="/#/add/">
							+ Add Book
						</Button>
					</div>
				</header>
				<main>
					<Grid>
						<AppRouter />
					</Grid>
				</main>
			</div></Router>
		);
	}
}

export default App;
