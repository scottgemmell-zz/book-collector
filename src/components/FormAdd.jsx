import React from "react"
import PropTypes from "prop-types"
import { reduxForm, Field } from "redux-form";
import {
	Form, Button, ButtonToolbar,
} from "react-bootstrap";
import FieldInput from "./FieldInput.jsx";

const validate = values => {
	const errors = {};

	if(!values.id) {
		errors.id = "Required";
	}
	if(!values.author) {
		errors.author = "Required";
	}
	if(!values.title) {
		errors.title = "Required";
	}

	return errors;
};

const renderInput = ({ input, meta, label}) => (
	<Form.Group
		//controlId={id}
	>
		<Form.Label>
			{label}
		</Form.Label>
		<Form.Control
			// inputRef={inputRef}
			type="text" 
			required={meta.error && meta.touched}
			// disabled={disabled} 
			// defaultValue={value}
			// placeholder={placeholderText}
			// bsClass={`form-control ${modifier}`}
			{...input} 
		/>
		<Form.Control.Feedback type="invalid">
			{meta.error}
		</Form.Control.Feedback>

	</Form.Group>
);


let FormAdd = ({ handleSubmit, submitting, reset, addBook }) => {
	return (
		<div>
			<Form onSubmit={handleSubmit(addBook)} className="was-validated">
	
				<Field name="id" label="ID" component={renderInput} />
				<Field name="title" label="Title" component={renderInput} />
				<Field name="author" label="Author" component={renderInput} />
				
				<ButtonToolbar>
					<Button variant="link" type="button" onClick={reset}>
						Reset
					</Button>
					<Button variant="primary" type="submit" disabled={submitting}>
						Add Book
					</Button>
				</ButtonToolbar>
			</Form>
		</div>
	);
};

FormAdd = reduxForm({
	form: "add",
	destroyOnUnmount: false,
	validate,
})(FormAdd);

FormAdd.propTypes = {

};

export default FormAdd;
