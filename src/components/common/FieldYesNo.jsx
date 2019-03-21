import React from "react";
import { Form } from "react-bootstrap";

const Radio = ({ 
	input, 
	label,
	touched,
	error,
}) => {
	return (
		<>
			{/* <input type="radio" {...input} /> {label} {" "} */}
			{/* <Form.Check type="radio" {...input} label={label} inline /> */}
			<Form.Check inline>
				<Form.Check.Input 
					{...input} 
					type="radio" 
					className={touched && (error) ? "is-invalid" : ""}
				/>
				<Form.Check.Label>{label}</Form.Check.Label>
			</Form.Check>
		</>
	);
};

export default Radio;