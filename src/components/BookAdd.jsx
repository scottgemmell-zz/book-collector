import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import FieldInput from "./FieldInput.jsx";
import { startAddingBook } from "../redux/actions/books.actions";

class BookAdd extends Component {
	constructor(props){
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();

		const { startAddingBook } = this.props;

		startAddingBook({ 
			title: this.titleInput.value, 
			author: this.authorInput.value, 
		});
	}

	render(){
		return (
			<div>
				<h2>
					Add
				</h2>

				<Form onSubmit={this.handleSubmit}>
					<FieldInput 
						inputRef={(input) => {
							this.titleInput = input;
						}} 
						id="fieldTitle" 
						name="title"
						value="Child 44"
						placeholderText="Title" 
						title="Enter a Title"
						hideLabel={true} 
						modifier="c-controls__input c-controls__input--title"
					/>

					<FieldInput 
						inputRef={(input) => {
							this.authorInput = input;
						}} 
						id="fieldAuthor" 
						name="author"
						value="Tom Rob Smith"
						placeholderText="Author" 
						title="Enter a Author"
						hideLabel={true} 
						modifier="c-controls__input c-controls__input--author"
					/>
					
					<Button bsStyle="primary" type="submit">
						Add Book
					</Button>
				</Form>
			</div>
		);
	}
}

BookAdd.propTypes = {
	handleSubmit: PropTypes.func,
	startAddingBook: PropTypes.func,
};

export default connect(null, { startAddingBook })(BookAdd);