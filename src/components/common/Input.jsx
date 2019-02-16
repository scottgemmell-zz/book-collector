import React from "react";
import { Form } from "react-bootstrap";
import { Renderer } from "./";

const Input = Renderer((input, touched, error, disabled, placeholder) => 
	<Form.Control 
		{...input} 
		disabled={disabled}
		className={touched && error ? "is-invalid" : ""}
		placeholder={placeholder}
		data-test="input"
	/>
);

export default Input;