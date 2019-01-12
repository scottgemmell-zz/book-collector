import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import BookAdd from "../components/BookAdd.jsx";
import BookList from "../components/BookList.jsx";
import BookDetail from "../components/BookDetail.jsx";

const AppRouter = () => (
	<Router>
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">List</Link>
					</li>
					<li>
						<Link to="/add/">Add</Link>
					</li>
					<li>
						<Link to="/detail/">Detail</Link>
					</li>
				</ul>
			</nav>

			<Route path="/" component={BookAdd} />
			<Route path="/list/" exact component={BookList} />
			<Route path="/detail/" component={BookDetail} />
		</div>
	</Router>
);

export default AppRouter;