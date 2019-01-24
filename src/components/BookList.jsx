import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { startFetchingBooks, startDeletingBook } from "../redux/actions/books.actions";
import * as R from "ramda";
import spinner from "../assets/svg/spinner.svg";

class BookList extends Component {

	componentDidMount() {
		const { startFetchingBooks } = this.props;
		startFetchingBooks();
	}

	render(){
		const { books } = this.props;

		if (!books || R.isEmpty(books)) {
			return <div></div>;
		}

		// if (loading === true) {
		// 	return <div className="u-spinner">
		// 		<img src={spinner} alt="Loading..." />
		// 	</div>;
		// }

		return (
			<div>
				<h2>
					BookList
				</h2>
	
				<ul className="list">
					{books.map((book) => {
						return (<li className="list__item c-book" key={book.id}>
							<div>
								<h3>
									<Link className="list__title" to={`/book/view/${book.id}`}>
										{book.title}
									</Link>
								</h3>
								<p className="h4">
									{book.author}
								</p>
							</div>
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

export default connect(mapStateToProps, { startFetchingBooks, startDeletingBook })(BookList);