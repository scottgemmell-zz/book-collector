import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FormAdd from "./FormAdd";
import { addBook } from "../redux/actions/books.actions";

class BookAdd extends Component {
	constructor(props){
		super(props);

		this.submit = this.submit.bind(this);
	}

	submit(e){
		e.preventDefault();

		const { addBook, history } = this.props;
		// addBook({ 
		// 	id: this.idInput.value, 
		// 	title: this.titleInput.value, 
		// 	author: this.authorInput.value,
		// });
		// history.push("/");
	}

	render(){

		const { books, addBook } = this.props;

		return (
			<div>
				<h2>
					Add
				</h2>
				<div className="c-book">
					<FormAdd books={books} addBook={addBook} />
				</div>
			</div>
		);
	}
}

BookAdd.propTypes = {
	submit: PropTypes.func,
	addBook: PropTypes.func,
};

const mapStateToProps = (state) => {
	return { 
		books: state.books
	};
};

export default connect(mapStateToProps, { addBook })(BookAdd);