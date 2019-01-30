import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "../redux/actions/books.actions";
import { Button } from "react-bootstrap";
import * as R from "ramda";

class BookView extends Component {
	
	constructor(props){
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(id, title, author){
		// e.preventDefault();
		// console.log("handleDelete", e.target.value);
		const { history, deleteBook, books } = this.props;
		deleteBook({ 
			id,
			title, 
			author,
		}, books);
		history.push("/");
	}

	render(){

		const { match: { params: { id } }, books } = this.props;

		console.log({books});

		// N/A
		// if (loading === true) {
		// 	return <div className="u-spinner">
		// 		<img src={spinner} alt="Loading..." />
		// 	</div>;
		// }

		if (!books || R.isEmpty(books)) {
			return <div></div>;
		}

		const book = books.find(book => book !== null && +book.id === +id);

		return (
			<>
				<h2>
					Book {id}
				</h2>
				<div className="c-book">
					<div>
						<dl>
							<dt>
								Title
							</dt>
							<dd>
								{book.title}
							</dd>
							<dt>
								Author
							</dt>
							<dd>
								{book.author}
							</dd>
						</dl>		
					</div>
					<div className="list__action">
						<Link className="list__title" to={`/book/edit/${book.id}`}>
							Edit	
						</Link>
						{/* <Button 
							bsSize="xsmall" 
						>Edit</Button> */}
						{" "}
						<Button 
							bsStyle="danger"
							bsSize="xsmall"
							onClick={() => this.handleDelete(id, book.title, book.author)}
						>Delete</Button>
					</div>
				</div>
			</>
		);	
	}
}

const mapStateToProps = state => ({
	books: state.books,
});

export default connect(mapStateToProps, { 
	deleteBook 
})(BookView);