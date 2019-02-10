import React from "react";
import { Form } from "react-bootstrap";

/*eslint-disable */
const Renderer = render => ({ 
	id,
	input, 
	label,
	placeholder, 
	meta: { touched, error },
	...rest, 
}) => 
	<Form.Group
		controlId={id} 
	>
		<Form.Label>
			{label}
		</Form.Label>
		{render(input, touched, error, placeholder, rest)}
		{/* <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback> */}
		{touched && (
			error && <span className="text-danger">{error}</span>
		)}
	</Form.Group>;
/*eslint-enable */

export const RenderInput = Renderer((input, touched, error, placeholder) => 
	<Form.Control 
		{...input}
		className={touched && (error) ? "is-invalid" : ""}
		placeholder={placeholder}
	/>
);

export const RenderSelect = Renderer((input, touched, error, placeholder, {children}) => {
	console.log("chi", children);
	return <Form.Control 
		{...input}
		className={touched && (error) ? "is-invalid" : ""}
		as="select" 
	>
		{children}
	</Form.Control>;
});