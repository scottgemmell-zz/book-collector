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

const renderInput = ({ 
	input, 
	label, 
	name, 
	placeholder, 
	type,
	meta: { touched, error, warning } 
}) => (
	<Form.Group
		controlId={name} 
	>
		<Form.Label>
			{label}
		</Form.Label>
		<Form.Control 
			className={touched && (error || warning) ? "is-invalid" : ""}
			type={type} 
			// disabled={disabled} 
			placeholder={placeholder}
			{...input} 
		/>
		{/* <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback> */}
		{touched && (
			(error && <span className="text-danger">{error}</span>) ||
			(warning && <span className="text-warning">{warning}</span>)
		)}
	</Form.Group>
);


let BookForm = ({ title, handleSubmit, pristine, submitting, reset, fn }) => {

	return (
		<div>
			<h2>
				{title}
			</h2>
			<div className="c-book">
				<Form onSubmit={handleSubmit(fn)}>
		
					<Field 
						name="id" 
						label="ID" 
						type="text"
						// placeholder="ID..." 
						component={renderInput} 
						validate={[required, number]}
					/>
					<Field 
						name="title" 
						label="Title" 
						type="text" 
						placeholder="Title..." 
						component={renderInput} 
						validate={[required, alphaNumeric]}
					/>
					<Field 
						name="author" 
						label="Author" 
						type="text" 
						placeholder="Author..." 
						component={renderInput} 
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
						<Button 
							disabled={submitting} 
							variant="primary" 
							type="submit"
						>
							Submit
						</Button>
					</ButtonToolbar>
				</Form>
			</div>
		</div>
	);
};

BookForm = reduxForm({
	form: "booksForm",
	destroyOnUnmount: false,
	enableReinitialize: true,
})(BookForm);

// BookForm.propTypes = {

// };

const mapStateToProps = (state, ownProps) => {
	//console.log("mapStateToProps", { ownProps });
	return {
		initialValues: ownProps.book === undefined ? null : state.books[ownProps.book.id],
	};
};

export default connect(mapStateToProps)(BookForm);
