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


let BookFormSecondPage = ({ title, handleNext, handlePrev, submitting, reset, fn }) => {

	return (
		<div>
			<h2>
				Second
			</h2>
			<div className="c-book">
				<Form onSubmit={handleNext}>
		
					<Field 
						id="noOfPages" 
						name="noOfPages" 
						label="Number of Pages" 
						type="text"
						placeholder="Number of Pages..." 
						component={RenderInput} 
						validate={[required, number]}
					/>
					<Field 
						id="publisher" 
						name="publisher" 
						label="Publisher" 
						type="text" 
						placeholder="Publisher..." 
						component={RenderInput} 
						validate={[required, alphaNumeric]}
					/>
					<Field 
						id="lang" 
						name="lang" 
						label="Lang" 
						type="text" 
						placeholder="Lang..." 
						component={RenderInput} 
						validate={[required, alpha]}
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
							Next
						</Button>
					</ButtonToolbar>
				</Form>
			</div>
		</div>
	);
};

BookFormSecondPage = reduxForm({
	form: "booksForm",
	destroyOnUnmount: false,
	enableReinitialize: true,
})(BookFormSecondPage);

// BookFormSecondPage.propTypes = {

// };

const mapStateToProps = (state, ownProps) => {
	//console.log("mapStateToProps", { ownProps });
	return {
		initialValues: ownProps.book === undefined ? null : state.books[ownProps.book.id],
	};
};

export default connect(mapStateToProps)(BookFormSecondPage);
