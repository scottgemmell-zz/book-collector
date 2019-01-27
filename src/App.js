import React, { Component } from "react";
import { Button, Grid } from "react-bootstrap";
import logo from "./logo.svg";
import { Route, Link } from "react-router-dom";
import BookAdd from "./components/BookAdd.jsx";
import BookList from "./components/BookList.jsx";
import BookView from "./components/BookView.jsx";
// import BookEdit from "./components/BookEdit.jsx";

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
					
					<Button bsStyle="primary" href="/add/">
						+ Add Book
					</Button>
				</header>
				<main>
					<Grid>
						<Route path="/" exact component={BookList} />
						<Route path="/add/" component={BookAdd} />
						<Route path={"/book/view/:id"} component={BookView} />
						{/* <Route path={"/book/edit/:id"} component={BookEdit} /> */}
					</Grid>
				</main>
			</div>
		);
	}
}

export default App;
