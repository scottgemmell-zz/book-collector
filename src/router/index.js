import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import BookAdd from "../components/BookAdd.jsx";
import BookList from "../components/BookList.jsx";
import BookDetail from "../components/BookDetail.jsx";

const AppRouter = () => (
	<div>
		<Route path="/add/" component={BookAdd} />
		<Route path="/" exact component={BookList} />
		<Route path="/detail/" component={BookDetail} />
	</div>
);

export default AppRouter;