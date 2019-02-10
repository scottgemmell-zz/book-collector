import React from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import {
	Form, Button, ButtonToolbar,
} from "react-bootstrap";
import { 
	required, 
	number, 
	alphaNumeric, 
	alpha, 
	minLength3 
} from "../helpers/validation.js";
import RenderInput from "./RenderInput";


let BookFormThirdPage = ({ title, handleSubmit, handlePrev, submitting, reset, fn }) => {

	return (
		<div>
			<h2>
				Third
			</h2>
			<div className="c-book">
				<Form onSubmit={handleSubmit(fn)}>
		
					<Field 
						id="id" 
						name="id" 
						label="ID" 
						type="text"
						// placeholder="ID..." 
						component={RenderInput} 
						validate={[required, number]}
					/>
					<Field 
						id="title" 
						name="title" 
						label="Title" 
						type="text" 
						placeholder="Title..." 
						component={RenderInput} 
						validate={[required, alphaNumeric]}
					/>
					<Field 
						id="author" 
						name="author" 
						label="Author" 
						type="text" 
						placeholder="Author..." 
						component={RenderInput} 
						validate={[required, alpha, minLength3]}
					/>
					
					<ButtonToolbar>
						<Button 
							onClick={reset} 
							// disabled={pristine || submitting} 
							variant="link" 
							type="button"
						>
							Reset
						</Button>
						{" "}
						<Button
							onClick={handlePrev}
							variant="link"
							type="button"
						>
							Previous
						</Button>
						{" "}
						<Button 
							disabled={submitting} 
							variant="primary" 
							type="submit"
						>
							Submit
						</Button>
					</ButtonToolbar>
				</Form>
			</div>
		</div>
	);
};

BookFormThirdPage = reduxForm({
	form: "booksForm",
	destroyOnUnmount: false,
	enableReinitialize: true,
})(BookFormThirdPage);

// BookFormThirdPage.propTypes = {

// };

const mapStateToProps = (state, ownProps) => {
	//console.log("mapStateToProps", { ownProps });
	return {
		initialValues: ownProps.book === undefined ? null : state.books[ownProps.book.id],
	};
};

export default connect(mapStateToProps)(BookFormThirdPage);
