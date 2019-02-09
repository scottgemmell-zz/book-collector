import React from "react"
// import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import {
	Form, Button, ButtonToolbar,
} from "react-bootstrap";

const required = value => 
	(value || typeof value === "number" 
		? undefined 
		: "Required"
	);

const number = value => 
	value && isNaN(Number(value)) 
		? "Must be a number" 
		: undefined;

const alphaNumeric = value =>
	value && /[^a-zA-Z0-9 ]/i.test(value)
		? "Only alphanumeric characters"
		: undefined;
	
const alpha = value =>
	value && /[^a-zA-Z ]/i.test(value)
		? "Only alpha characters"
		: undefined;

export const minLength = min => value =>
	value && value.length < min ? `Must be ${min} characters or more` : undefined

export const minLength3 = minLength(3);

const renderInput = ({ 
	input, 
	label, 
	name, 
	placeholder, 
	value,
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
			// inputRef={inputRef}
			className={touched && (error || warning) ? "is-invalid" : ""}
			type={type} 
			// required={touched && (error || warning)}
			// disabled={disabled} 
			value={value}
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


let BookForm = ({ handleSubmit, submitting, reset, addBook, books }) => {
	return (
		<div>
			<Form onSubmit={handleSubmit(addBook)}>
	
				<Field 
					name="id" 
					label="ID" 
					type="text"
					// placeholder="ID..." 
					value={books.length}
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
					<Button variant="link" type="button" onClick={reset}>
						Reset
					</Button>
					<Button variant="primary" type="submit" disabled={submitting}>
						Submit
					</Button>
				</ButtonToolbar>
			</Form>
		</div>
	);
};

BookForm = reduxForm({
	form: "add",
	destroyOnUnmount: false,
})(BookForm);

// BookForm.propTypes = {

// };

export default BookForm;
