import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BookForm from "./BookForm";
import { addBook, editBook } from "../redux/actions/books.actions";

class BookAddEdit extends Component {
	// constructor(props){
	// 	super(props);

	// 	this.handleEdit = this.handleEdit.bind(this);
	// 	this.handleAdd = this.handleAdd.bind(this);
	// }

	// handleAdd(e){
	// 	e.preventDefault();

	// 	const { addBook, history } = this.props;
	// 	addBook({ 
	// 		id: this.idInput.value, 
	// 		title: this.titleInput.value, 
	// 		author: this.authorInput.value,
	// 	});
	// 	history.push("/");
	// }

	// handleEdit(e){
	// 	e.preventDefault();
	// 	const { editBook, history } = this.props;

	// 	editBook({ 
	// 		id: this.idInput.value, 
	// 		title: this.titleInput.value, 
	// 		author: this.authorInput.value, 
	// 	});
	// 	history.push("/");
	// }

	render(){

		const { match: { params: { id } }, books, addBook, editBook } = this.props;
		const book = books.find(book => book.id === +id);
		
		// console.log({ params });

		return (
			<div>
				<BookForm 
					book={book} 
					title={id ? "Edit" : "Add"} 
					fn={id ? editBook : addBook} 
				/>
			</div>
		);
	}
}

BookAddEdit.propTypes = {
	addBook: PropTypes.func,
	editBook: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
	//console.log("mapStateToProps", { ownProps });
	return {
		books: state.books,
	};
};

export default connect(mapStateToProps, { addBook, editBook })(BookAddEdit);