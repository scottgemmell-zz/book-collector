import React from "react";
import { Form } from "react-bootstrap";

const FieldYesNo = ({ 
	id,
	input,
	label,
	meta: { touched, error },
	radios
}) => 
	<Form.Group
		controlId={id}>
		<Form.Label>
			{label}
		</Form.Label>
		<div>
			<Form.Check 
				// {...input}
				type="radio"
				name="yesno"
				id={"field-yesno-yes"}
				// checked={checked}
				label="Aye"
				inline
			/>
			<Form.Check 
				// {...input}
				type="radio"
				name="yesno"
				id={"field-yesno-no"}
				// checked={checked}
				label="Naw"
				inline
			/>
		</div>
	</Form.Group>;

export default FieldYesNo;