import React from "react";
import { Form } from "react-bootstrap";

/*eslint-disable */
const Renderer = render => ({ 
	id,
	input, 
	label,
	disabled, 
	placeholder, 
	meta: { touched, error },
	...rest
}) => 
	<Form.Group
		controlId={id} 
		data-test="renderer"
	>
		<Form.Label>
			{label}
		</Form.Label>
		{render(input, touched, error, disabled, placeholder, rest)}
		{/* <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback> */}
		{touched && (
			error && <span className="text-danger">{error}</span>
		)}
	</Form.Group>;
/*eslint-enable */

export default Renderer;