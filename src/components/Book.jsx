import React, { Component } from "react";
import { connect } from "react-redux";
import { startDeletingBook } from "../redux/actions/books.actions";
import { Button } from "react-bootstrap";

class Book extends Component {
	
	constructor(props){
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(id){
		// e.preventDefault();
		// console.log("handleDelete", e.target.value);
		const { startDeletingBook } = this.props;
		startDeletingBook(id);
	}

	render(){

		const { match: { params: { id } }, books } = this.props;
		const book = books.find(book => book.id === id);

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
						<Button 
							bsSize="xsmall" 
						>Edit</Button>
						{" "}
						<Button 
							bsStyle="danger"
							bsSize="xsmall"
							onClick={() => this.handleDelete(id)}
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

export default connect(mapStateToProps, { startDeletingBook })(Book);