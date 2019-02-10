import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BookFormFirstPage from "./BookFormFirstPage";
import BookFormSecondPage from "./BookFormSecondPage";
import BookFormThirdPage from "./BookFormThirdPage";
import { addBook, editBook } from "../redux/actions/books.actions";

class BookForm extends Component {
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
		
		// console.log({ params });

		return (
			<div>
				{page === 1 && <BookFormFirstPage 
					book={book} 
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
	addBook: PropTypes.func,
	editBook: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
	//console.log("mapStateToProps", { ownProps });
	return {
		books: state.books,
	};
};

export default connect(mapStateToProps, { addBook, editBook })(BookForm);