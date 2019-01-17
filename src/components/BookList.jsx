import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { startFetchingBooks } from "../redux/actions/books.actions";
import * as R from "ramda";

class BookList extends Component {
	// constructor(props){
	// 	super(props);

	// 	this.fetchBooks = this.fetchBooks.bind(this);
	// }

	componentDidMount() {
		const { startFetchingBooks } = this.props;
		startFetchingBooks();
	}

	render(){
		const { books } = this.props;

		if (R.isEmpty(books)) {
			return <div></div>;
		}

		return (
			<div>
				<h2>
					BookList
				</h2>
				<ul>
					{books.map((book, i) => {
						return (<li key={i}>
							<Link to={`/book/${i}`}>{book.title}</Link> - {book.author}
						</li>);
					})}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { books: state.books };
}

export default connect(mapStateToProps, { startFetchingBooks })(BookList);