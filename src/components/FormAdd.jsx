import React from "react"
import PropTypes from "prop-types"
import { reduxForm, Field } from "redux-form";
import { Form, Button } from "react-bootstrap";
import FieldInput from "./FieldInput.jsx";
import {
	FormGroup, FormControl, ControlLabel, HelpBlock,
} from "react-bootstrap";

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

const renderInput = ({ input, meta, label}) => 
	<FormGroup
		//controlId={id}
	>
		<ControlLabel>
			{label}
		</ControlLabel>
		<FormControl
			// inputRef={inputRef}
			type="text" 
			// disabled={disabled} 
			// defaultValue={value}
			// placeholder={placeholderText}
			// bsClass={`form-control ${modifier}`}
			{...input} 
		/>
		<FormControl.Feedback />
		{meta.error && meta.touched && <HelpBlock>{meta.error}</HelpBlock>}
	</FormGroup>;


let FormAdd = ({ handleSubmit, submitting, reset, addBook }) => {
	return (
		<div>
			<form onSubmit={handleSubmit(addBook)}>
	
				<Field name="id" label="ID" component={renderInput} />
				<Field name="title" label="Title" component={renderInput} />
				<Field name="author" label="Author" component={renderInput} />
				
				<button className="btn" type="button" onClick={reset}>
					Reset
				</button>
				{" "}
				<button className="btn btn-primary" type="submit" disabled={submitting}>
					Add Book
				</button>
			</form>
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
