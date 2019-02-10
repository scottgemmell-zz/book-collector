import React from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import {
	Form, Button, ButtonToolbar,
} from "react-bootstrap";
import { 
	required, 
	alpha,
} from "../helpers/validation.js";
import { RenderInput } from "./Renderer";


let BookFormThirdPage = ({ title, handleSubmit, handlePrev, submitting, reset }) => {

	return (
		<div>
			<h2>
				Third
			</h2>
			<div className="c-book">
				<Form onSubmit={handleSubmit}>
		
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
	forceUnregisterOnUnmount: true,
	enableReinitialize: true,
	keepDirtyOnReinitialize: true,
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
