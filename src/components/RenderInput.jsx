import React from "react";
import { Form } from "react-bootstrap";

const renderInput = ({ 
	id,
	input, 
	label,
	placeholder, 
	type,
	meta: { touched, error } 
}) => (
	<Form.Group
		controlId={id} 
	>
		<Form.Label>
			{label}
		</Form.Label>
		<Form.Control 
			className={touched && (error) ? "is-invalid" : ""}
			type={type} 
			// disabled={disabled} 
			placeholder={placeholder}
			{...input} 
		/>
		{/* <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback> */}
		{touched && (
			error && <span className="text-danger">{error}</span>
		)}
	</Form.Group>
);

export default renderInput;