import React, { Component } from "react";
import { Container } from "react-bootstrap";
import history from "./history";
import logo from "./logo.svg";
import { 
	Router, 
	Route, 
	Link, 
	Switch 
} from "react-router-dom";
import { BookList, BookView, BookForm, Page404 } from "./components";
import { LinkContainer } from "react-router-bootstrap";

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
							
						</header>
						<main>
							<Container>
								<Switch>
									<Route exact path="/" component={BookList} />
									<Route path="/book/add/" component={BookForm} />
									<Route path={"/book/edit/:id"} component={BookForm} />
									<Route path={"/book/view/:id"} component={BookView} />
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
