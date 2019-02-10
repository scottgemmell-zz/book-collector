import React from "react";
import { connect } from "react-redux";
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
	minLength3 
} from "../helpers/validation.js";
import { RenderInput, RenderSelect } from "./Renderer";


let BookFormFirstPage = ({ title, handleSubmit, submitting, reset }) => {

	return (
		<div>
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
						component={RenderInput} 
						validate={[required, number]}
					/>
					<Field 
						id="title" 
						name="title" 
						label="Title" 
						component={RenderSelect} 
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
						component={RenderInput} 
						validate={[required, alphaNumeric]}
					/>
					<Field 
						id="author" 
						name="author" 
						label="Author" 
						placeholder="Author..." 
						component={RenderInput} 
						validate={[required, alpha, minLength3]}
					/>
					
					<ButtonToolbar>
						<Button 
							onClick={reset} 
							// disabled={pristine || submitting} 
							variant="link" 
							type="button"
						>
							Reset
						</Button>
						{" "}
						<Button 
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

BookFormFirstPage = reduxForm({
	form: "booksForm",
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: true,
	// Refreshes data {book} || "". Reinitializes everytime.
	enableReinitialize: true,
	keepDirtyOnReinitialize: true,
})(BookFormFirstPage);

// BookFormFirstPage.propTypes = {

// };

const mapStateToProps = (state, ownProps) => {
	console.log("mapStateToProps", { ownProps });
	return {
		initialValues: ownProps.book === undefined 
			? { id: ownProps.len }
			: state.books[ownProps.book.id],
	};
};

export default connect(mapStateToProps)(BookFormFirstPage);
