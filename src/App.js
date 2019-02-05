import React, { Component } from "react";
import { Button, Grid } from "react-bootstrap";
import history from "./history";
import logo from "./logo.svg";
import { 
	Router, 
	Route, 
	Link, 
	Switch 
} from "react-router-dom";
import BookAdd from "./components/BookAdd.jsx";
import BookList from "./components/BookList.jsx";
import BookView from "./components/BookView.jsx";
import BookEdit from "./components/BookEdit.jsx";
import Page404 from "./components/Page404.jsx";

class App extends Component {

	render() {

		return (
			<div className="App">
				<Router history={history}>
					<div>
						<header className="App-header">
							<img src={logo} className="App-logo" alt="logo" />
							<h1>
								<Link to="/">
									Books
								</Link>
							</h1>
							<Link to="/add/">
								<Button bsStyle="primary">
									+ Add Book
								</Button>
							</Link>
						</header>
						<main>
							<Grid>
								<Switch>
									<Route exact path="/" component={BookList} />
									<Route path="/add/" component={BookAdd} />
									<Route path={"/book/view/:id"} component={BookView} />
									<Route path={"/book/edit/:id"} component={BookEdit} />
									<Route component={Page404} />
								</Switch>
							</Grid>
						</main>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
