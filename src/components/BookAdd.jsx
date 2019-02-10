import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BookForm from "./BookForm";
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

		const { addBook } = this.props;

		return (
			<div>
				<h2>
					Add
				</h2>
				<BookForm fn={addBook} />
			</div>
		);
	}
}

BookAdd.propTypes = {
	submit: PropTypes.func,
	addBook: PropTypes.func,
};

export default connect(null, { addBook })(BookAdd);