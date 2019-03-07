import React from "react";
import { Col, Form } from "react-bootstrap";

/*eslint-disable */
const FieldDate = fields => 
	<Form.Group
		controlId={fields.id} 
		data-test="date"
	>
		<Form.Label>
			{fields.label}
		</Form.Label>
		
		<Form.Row>
		<Form.Group as={Col} controlId={"mm"} sm={3}>
				<Form.Label 
					className="text-muted" 
					style={{fontSize: 12, color: "#aaa", marginBottom: 0}}
				>
					DD
				</Form.Label>
				<Form.Control 
					{...fields.dd.input} 
					//disabled={disabled}
					className={fields.dd.meta.touched && fields.dd.meta.error ? "is-invalid" : ""}
					//placeholder={placeholder}
					type="text" 
					//name={fields.dd.input.name}
				/>
			</Form.Group>
			<Form.Group as={Col} controlId={"mm"} sm={3}>
				<Form.Label 
					className="text-muted" 
					style={{fontSize: 12, color: "#aaa", marginBottom: 0}}
				>
					MM
				</Form.Label>
				<Form.Control 
					{...fields.mm.input} 
					//disabled={disabled}
					className={fields.mm.meta.touched && fields.mm.meta.error ? "is-invalid" : ""}
					//placeholder={placeholder}
					type="text" 
					//name={fields.mm.input.name}
				/>
			</Form.Group>
			<Form.Group as={Col} controlId={"yyyy"} sm={6}>
				<Form.Label 
					className="text-muted" 
					style={{fontSize: 12, color: "#aaa", marginBottom: 0}}
				>
					YYYY
				</Form.Label>
				<Form.Control 
					{...fields.yyyy.input} 
					//disabled={disabled}
					className={fields.yyyy.meta.touched && fields.yyyy.meta.error ? "is-invalid" : ""}
					//placeholder={placeholder}
					type="text" 
					//name={fields.yyyy.input}
				/>
			</Form.Group>
			{(fields.dd.meta.touched && fields.dd.meta.error || 
				fields.mm.meta.touched && fields.mm.meta.error || 
				fields.yyyy.meta.touched && fields.yyyy.meta.error) && <ul>
				{fields.dd.meta.touched && (
					fields.dd.meta.error && 
						<li className="text-danger">{fields.dd.meta.error}</li>
				)}
				{fields.mm.meta.touched && (
					fields.mm.meta.error && 
						<li className="text-danger">{fields.mm.meta.error}</li>
				)}
				{fields.yyyy.meta.touched && (
					fields.yyyy.meta.error && 
						<li className="text-danger">{fields.yyyy.meta.error}</li>
				)}
			</ul>}
		</Form.Row>
		{/* 
		@TODO: Make required?
		{touched && (
			error && <span className="text-danger">{error}</span>
		)} 
		*/}
	</Form.Group>;
/*eslint-enable */

export default FieldDate;