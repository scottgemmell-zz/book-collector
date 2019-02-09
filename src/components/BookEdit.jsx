import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BookForm from "./BookForm";
import { editBook } from "../redux/actions/books.actions";

class BookEdit extends Component {
	constructor(props){
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		const { editBook, history } = this.props;

		editBook({ 
			id: this.idInput.value, 
			title: this.titleInput.value, 
			author: this.authorInput.value, 
		});
		history.push("/");
	}

	render(){

		const { match: { params: { id } }, books, editBook, initialValues } = this.props;
		// const book = books.find(book => book.id === +id);

		return (
			<div>
				<h2>
					Edit
				</h2>
				<BookForm fn={editBook} initialValues={initialValues} />
			</div>
		);
	}
}

BookEdit.propTypes = {
	handleSubmit: PropTypes.func,
	editBook: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
	//console.log("mapStateToProps", { ownProps });
	return {
		books: state.books,
		initialValues: state.books[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, { editBook })(BookEdit);