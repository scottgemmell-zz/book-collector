import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "../redux/actions/books.actions";
import { Button, ButtonToolbar } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import * as R from "ramda";

class BookView extends Component {
	
	constructor(props){
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(id){
		const { history, deleteBook } = this.props;
		deleteBook(id);
		history.push("/");
	}

	render(){

		const { match: { params: { id } }, books } = this.props;

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
						<dl className="row">
							<dt className="col-sm-3">
								ID
							</dt>
							<dd className="col-sm-9">
								{book.id}
							</dd>
							<dt className="col-sm-3">
								Title
							</dt>
							<dd className="col-sm-9">
								{book.title}
							</dd>
							<dt className="col-sm-3">
								Author
							</dt>
							<dd className="col-sm-9">
								{book.author}
							</dd>
						</dl>		
					</div>
					<ButtonToolbar>
						<LinkContainer to={`/book/edit/${book.id}`}>
							<Button variant="link" >
								Edit	
							</Button>
						</LinkContainer>
						{" "}
						<Button 
							// bsStyle="danger"
							// bsSize="xsmall"
							onClick={() => this.handleDelete(id)}
						>Delete</Button>
					</ButtonToolbar>
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