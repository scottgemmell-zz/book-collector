import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import history from "./history";
import logo from "./logo.svg";
import { 
	Router, 
	Route, 
	Link, 
	Switch 
} from "react-router-dom";
import { BookAdd, BookList, BookView, BookEdit, Page404 } from "./components";

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
								<Button>
									+ Add Book
								</Button>
							</Link>
						</header>
						<main>
							<Container>
								<Switch>
									<Route exact path="/" component={BookList} />
									<Route path="/add/" component={BookAdd} />
									<Route path={"/book/view/:id"} component={BookView} />
									<Route path={"/book/edit/:id"} component={BookEdit} />
									<Route component={Page404} />
								</Switch>
							</Container>
						</main>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
