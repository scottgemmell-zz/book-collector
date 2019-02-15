import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import history from "../history";
import BookFormFirstPage from "./BookFormFirstPage";
import BookFormSecondPage from "./BookFormSecondPage";
import BookFormThirdPage from "./BookFormThirdPage";
import { addBook, editBook } from "../redux/actions/books.actions";

export class BookForm extends Component {
	constructor(props){
		super(props);
		this.nextPage = this.nextPage.bind(this);
		this.prevPage = this.prevPage.bind(this);
		this.state = {
			page: 1
		};
		// this.handleEdit = this.handleEdit.bind(this);
		// this.handleAdd = this.handleAdd.bind(this);
	}

	nextPage() {
		this.setState({ page: this.state.page + 1 });
	}
	
	prevPage() {
		this.setState({ page: this.state.page - 1 });
	}

	render(){
		const { page } = this.state;
		const { match: { params: { id } }, books, addBook, editBook } = this.props;
		const book = books.find(book => book.id === +id);

		return (
			<div data-test="book-form">
				{page === 1 && <BookFormFirstPage 
					book={book} 
					len={books.length}
					title={id ? "Edit" : "Add"} 
					onSubmit={this.nextPage}
				/>}

				{page === 2 && <BookFormSecondPage 
					book={book} 
					title={id ? "Edit" : "Add"} 
					onSubmit={this.nextPage} 
					handlePrev={this.prevPage}
				/>}

				{page === 3 && <BookFormThirdPage 
					book={book} 
					title={id ? "Edit" : "Add"} 
					onSubmit={id ? editBook : addBook} 
					handlePrev={this.prevPage}
				/>}
			</div>
		);
	}

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
}

BookForm.propTypes = {
	match: {
		params: {
			id: PropTypes.string.isRequired,
		}
	},
	books: PropTypes.object.isRequired,
	addBook: PropTypes.func.isRequired,
	editBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	return {
		books: state.books,
	};
};

export default connect(mapStateToProps, { addBook, editBook })(BookForm);