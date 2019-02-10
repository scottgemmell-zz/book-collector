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
import RenderInput from "./RenderInput";


let BookFormFirstPage = ({ title, handleNext, submitting, reset }) => {

	return (
		<div>
			<h2>
				First
			</h2>
			<div className="c-book">
				<Form onSubmit={handleNext}>
		
					<Field 
						id="id" 
						name="id" 
						label="ID" 
						type="text"
						placeholder="ID..." 
						component={RenderInput} 
						validate={[required, number]}
					/>
					<Field 
						id="title" 
						name="title" 
						label="Title" 
						type="text" 
						placeholder="Title..." 
						component={RenderInput} 
						validate={[required, alphaNumeric]}
					/>
					<Field 
						id="author" 
						name="author" 
						label="Author" 
						type="text" 
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
	enableReinitialize: true,
	forceUnregisterOnUnmount: true,
})(BookFormFirstPage);

// BookFormFirstPage.propTypes = {

// };

const mapStateToProps = (state, ownProps) => {
	//console.log("mapStateToProps", { ownProps });
	return {
		initialValues: ownProps.book === undefined ? null : state.books[ownProps.book.id],
	};
};

export default connect(mapStateToProps)(BookFormFirstPage);
