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
							<div>
								<h3>
									<Link className="list__title" to={`/book/${i}`}>{book.title}</Link>
								</h3>
								<p className="h4">
									{book.author}
								</p>
							</div>
							<div className="list__action">
								<Button 
									bsSize="xsmall"
									onClick={this.handleDelete}
								>Edit</Button> 
								<Button 
									// bsStyle="danger"
									bsSize="xsmall"
									onClick={this.handleDelete}
								>Delete</Button>
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