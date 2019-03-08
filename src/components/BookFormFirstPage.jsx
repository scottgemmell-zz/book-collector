import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import {
	Form, Button, ButtonToolbar,
} from "react-bootstrap";
import { 
	required, 
	number, 
	alphaNumeric, 
	alpha, 
	minLength3,
} from "../helpers/validation.utils.js";
import { Input, Select } from "./common";

export let BookFormFirstPage = ({ handleSubmit, submitting, reset }) => {
	
	return (
		<div data-test="book-form-first-page">
			<h2>
				First
			</h2>
		
			<div className="c-book">
				<Form onSubmit={handleSubmit}>	

					<Field 
						id="id" 
						name="id" 
						label="ID"
						disabled={true}
						component={Input} 
						validate={[required, number]}
					/>

					<Field 
						id="title" 
						name="title" 
						label="Title" 
						component={Select} 
						//validate={[required]}
					>
						<option value="Mr">Mr</option>
						<option value="Mrs">Mrs</option>
						<option value="Miss">Miss</option>
					</Field>
					<Field 
						id="bookTitle" 
						name="bookTitle" 
						label="Book Title" 
						placeholder="Book Title..." 
						component={Input} 
						validate={[required, alphaNumeric]}
					/>
					<Field 
						id="author" 
						name="author" 
						label="Author" 
						placeholder="Author..." 
						component={Input} 
						validate={[required, alpha, minLength3]}
					/>

					
					
					<ButtonToolbar>
						<Button 
							data-test="reset"
							onClick={reset} 
							// disabled={pristine || submitting} 
							variant="link" 
							type="button"
						>
							Reset
						</Button>
						{" "}
						<Button 
							data-test="submit"
							disabled={submitting} 
							variant="primary" 
							type="submit"
						>
							Next
						</Button>
					</ButtonToolbar>
				</Form>
			</div>
		</div>
	);
};

BookFormFirstPage.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	submitting: PropTypes.bool.isRequired,
	reset: PropTypes.func.isRequired,
};

BookFormFirstPage = reduxForm({
	form: "booksForm",
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: true,
	// Refreshes data {book} || "". Reinitializes everytime.
	enableReinitialize: true,
	keepDirtyOnReinitialize: true,
})(BookFormFirstPage);

BookFormFirstPage = connect((state, ownProps) => {
	// console.log({ ownProps });
	return {
		initialValues: ownProps.book === undefined 
			? { id: ownProps.len }
			: state.books[ownProps.book.id],
	};
})(BookFormFirstPage);

export default BookFormFirstPage;