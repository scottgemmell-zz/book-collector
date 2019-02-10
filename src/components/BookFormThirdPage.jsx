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
						id="isbn10" 
						name="isbn10" 
						label="ISBN 10" 
						type="text"
						placeholder="ISBN 10..." 
						component={RenderInput} 
						validate={[required, number]}
					/>
					<Field 
						id="isbn13" 
						name="isbn13" 
						label="ISBN 13" 
						type="text" 
						placeholder="ISBN 13..." 
						component={RenderInput} 
						validate={[required]}
					/>
					<Field 
						id="publicationDate" 
						name="publicationDate" 
						label="Publication Date" 
						type="text" 
						placeholder="Publication Date..." 
						component={RenderInput} 
						validate={[required]}
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
