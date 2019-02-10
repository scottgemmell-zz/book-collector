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
	...rest, 
}) => 
	<Form.Group
		controlId={id} 
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

export const RenderInput = Renderer((input, touched, error, disabled, placeholder) => 
	<Form.Control 
		{...input} 
		disabled={disabled}
		className={touched && (error) ? "is-invalid" : ""}
		placeholder={placeholder}
	/>
);

export const RenderSelect = Renderer((input, touched, error, disabled, placeholder, {children}) => {
	return <Form.Control 
		{...input}
		className={touched && (error) ? "is-invalid" : ""}
		as="select" 
	>
		{children}
	</Form.Control>;
});


/*eslint-disable */
export const RenderConditional = ({ 
	id, 
	input,
	label,
	meta: { touched, error },
	radios
}) => 
	<Form.Group
		controlId={id} 
	>
		<Form.Label>
			{label}
		</Form.Label>
		<div>
			{radios.map((radio, i) => <Form.Check 
				{...input}
				key={i}
				id={`radio-${radio.value}`}
				checked={radio.checked}
				label={radio.label}
				value={radio.value}
				inline 
			/>)}
		</div>
		{touched && (
			error && <span className="text-danger">{error}</span>
		)}
	</Form.Group>;
/*eslint-enable */