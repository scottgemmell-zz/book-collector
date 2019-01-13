import React, { Component } from "react";
import { Button, Grid } from "react-bootstrap";
import logo from "./logo.svg";
import "./App.scss";
import { Route, Link } from "react-router-dom";
import BookAdd from "./components/BookAdd.jsx";
import BookList from "./components/BookList.jsx";
import BookDetail from "./components/BookDetail.jsx";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>
						<Link to="/">
							Books
						</Link>
					</h1>
					<div className="App-action">
						<Button bsStyle="primary" href="/add/">
							+ Add Book
						</Button>
					</div>
				</header>
				<main>
					<Grid>
						<Route path="/add/" component={BookAdd} />
						<Route path="/" exact component={BookList} />
						<Route path="/detail/" component={BookDetail} />
					</Grid>
				</main>
			</div>
		);
	}
}

export default App;
