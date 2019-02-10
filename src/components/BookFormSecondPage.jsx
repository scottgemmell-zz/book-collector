import React from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { reduxForm, Field, formValueSelector } from "redux-form";
import {
	Form, Button, ButtonToolbar
} from "react-bootstrap";
import { 
	required, 
	number, 
	alphaNumeric,  
} from "../helpers/validation.js";
import { RenderInput, RenderConditional } from "./Renderer";


let BookFormSecondPage = ({ hasISBN, title, handleSubmit, handlePrev, submitting, reset }) => {

	return (
		<div>
			<h2>
				Second
			</h2>
			<div className="c-book">
				<Form onSubmit={handleSubmit}>
		
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
						id="publicationDate" 
						name="publicationDate" 
						label="Publication Date" 
						type="text" 
						placeholder="Publication Date..." 
						component={RenderInput} 
						validate={[required]}
					/>

					<hr />

					<Field 
						id="hasISBN" 
						name="hasISBN" 
						label="Do you have ISBN numbers?" 
						component={RenderConditional} 
						type="radio"
						radios={[{label: "Yes", value: "yes"}]}
					/>
					{(hasISBN) && 
						<div>
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
						</div>}
					
					
					
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
	forceUnregisterOnUnmount: true,
	enableReinitialize: true,
	keepDirtyOnReinitialize: true,
})(BookFormSecondPage);

// BookFormSecondPage.propTypes = {

// };

const selector = formValueSelector("booksForm");

const mapStateToProps = (state, ownProps) => {

	const hasISBN = selector(state, "hasISBN");

	//console.log("mapStateToProps", { ownProps });
	return {
		hasISBN,
		initialValues: ownProps.book === undefined ? null : state.books[ownProps.book.id],
	};
};

export default connect(mapStateToProps)(BookFormSecondPage);
