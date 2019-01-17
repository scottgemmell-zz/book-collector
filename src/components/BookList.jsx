import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { startFetchingBooks, startDeletingBook } from "../redux/actions/books.actions";
import * as R from "ramda";

class BookList extends Component {
	constructor(props){
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}

	componentDidMount() {
		const { startFetchingBooks } = this.props;
		startFetchingBooks();
	}

	handleDelete(e){
		console.log("handleDelete", e.target.value);
		// const { startDeletingBook } = this.props;
		// startDeletingBook(id);
	}

	render(){
		const { books } = this.props;

		if (!books || R.isEmpty(books)) {
			return <div></div>;
		}

		return (
			<div>
				<h2>
					BookList
				</h2>
				<ul className="list">
					{books.map((book, i) => {
						return (<li className="list__item" key={i}>
							<Link to={`/book/${i}`}>{book.title}</Link> - {book.author} 
							<br/>
							<Button 
								bsSize="xsmall"
								onClick={this.handleDelete}
							>Delete</Button>
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