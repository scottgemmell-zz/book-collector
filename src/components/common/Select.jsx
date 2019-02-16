import React from "react";
import { Form } from "react-bootstrap";
import { Renderer } from "./";

const Select = Renderer((input, touched, error, {children}) => {
	return <Form.Control 
		{...input}
		className={touched && (error) ? "is-invalid" : ""}
		as="select" 
	>
		{children}
	</Form.Control>;
});

export default Select;