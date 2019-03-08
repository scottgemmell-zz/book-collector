import React from "react";
import { Col, Form } from "react-bootstrap";

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
					className={fields.dd.meta.touched && fields.dd.meta.error ? "is-invalid" : ""}
					type="text" 
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
					className={fields.mm.meta.touched && fields.dd.meta.error ? "is-invalid" : ""}
					type="text" 
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
					className={fields.yyyy.meta.touched && fields.dd.meta.error ? "is-invalid" : ""}
					type="text" 
				/>
			</Form.Group>
			{((fields.dd.meta.touched || fields.mm.meta.touched || fields.yyyy.meta.touched) 
				&& fields.dd.meta.error) 
				&& <span style={{position: "relative", left: 5}} className="text-danger">
					{fields.dd.meta.error && <span>{fields.dd.meta.error}</span>}
				</span>}
		</Form.Row>
	</Form.Group>;

export default FieldDate;