import React from "react";
import { Form } from "react-bootstrap";

/*eslint-disable */
const Conditional = ({ 
	id, 
	input,
	label,
	meta: { touched, error },
	radios
}) => 
	<Form.Group
		controlId={id} 
		data-test="conditional"
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
		{/* 
		@TODO: Make required?
		{touched && (
			error && <span className="text-danger">{error}</span>
		)} 
		*/}
	</Form.Group>;
/*eslint-enable */

export default Conditional;