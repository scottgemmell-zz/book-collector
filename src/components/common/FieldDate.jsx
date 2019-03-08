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
					{...fields.publicationDate.dd.input} 
					className={fields.publicationDate.dd.meta.touched && fields.publicationDate.dd.meta.error ? "is-invalid" : ""}
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
					{...fields.publicationDate.mm.input} 
					className={fields.publicationDate.mm.meta.touched && fields.publicationDate.dd.meta.error ? "is-invalid" : ""}
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
					{...fields.publicationDate.yyyy.input} 
					className={fields.publicationDate.yyyy.meta.touched && fields.publicationDate.dd.meta.error ? "is-invalid" : ""}
					type="text" 
				/>
			</Form.Group>
			{((fields.publicationDate.dd.meta.touched || fields.publicationDate.mm.meta.touched || fields.publicationDate.yyyy.meta.touched) 
				&& fields.publicationDate.dd.meta.error) 
				&& <span style={{position: "relative", left: 5}} className="text-danger">
					{fields.publicationDate.dd.meta.error && <span>{fields.publicationDate.dd.meta.error}</span>}
				</span>}
		</Form.Row>
	</Form.Group>;

export default FieldDate;