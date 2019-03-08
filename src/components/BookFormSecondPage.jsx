import React from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { reduxForm, Field, formValueSelector, Fields } from "redux-form";
import {
	Form, Button, ButtonToolbar
} from "react-bootstrap";
import { 
	required, 
	number, 
	alphaNumeric,  
	validatorDate, 
} from "../helpers/validation.utils.js";
import { Input, Conditional, FieldDate } from "./common";

let BookFormSecondPage = (props) => {
	console.log('props', props)
	const { hasISBN, hasISBN10, hasISBN13, title, handleSubmit, handlePrev, submitting, reset } = props;

	

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
						component={Input} 
						validate={[required, number]}
					/>

					<Field 
						id="publisher" 
						name="publisher" 
						label="Publisher" 
						type="text" 
						placeholder="Publisher..." 
						component={Input} 
						validate={[required, alphaNumeric]}
					/>

					{/* <Field 
						id="publicationDate" 
						name="publicationDate" 
						label="Publication Date" 
						type="text" 
						placeholder="Publication Date..." 
						component={Input} 
						validate={[required]}
					/> */}
					<Fields 
						id="publicationDate" 
						names={[
							"publicationDate.dd", 
							"publicationDate.mm", 
							"publicationDate.yyyy"
						]} 
						label="Publication Date" 
						component={FieldDate} 
					/>

					<hr />

					{title === "Add" && <Field 
						id="hasISBN" 
						name="hasISBN" 
						label="Do you have ISBN numbers?" 
						component={Conditional} 
						type="radio"
						radios={[{
							label: "Yes",
							//checked: `${hasISBN10 === undefined || hasISBN13 === undefined}`
						}]}
					/>}

					{hasISBN && 
						<div>
							<Field 
								id="isbn10" 
								name="isbn10" 
								label="ISBN 10" 
								type="text"
								placeholder="ISBN 10..." 
								component={Input} 
								//validate={[required, number]}
							/>
							<Field 
								id="isbn13" 
								name="isbn13" 
								label="ISBN 13" 
								type="text" 
								placeholder="ISBN 13..." 
								component={Input} 
								//validate={[required]}
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
	validate: validatorDate,
})(BookFormSecondPage);

// BookFormSecondPage.propTypes = {

// };

const selector = formValueSelector("booksForm");

const mapStateToProps = (state, ownProps) => {

	const hasISBN = selector(state, "hasISBN");
	const hasISBN10 = selector(state, "isbn10");
	const hasISBN13 = selector(state, "isbn13");
	//console.log("mapStateToProps", { ownProps });
	return {
		hasISBN,
		hasISBN10,
		hasISBN13,
		initialValues: ownProps.book === undefined ? null : state.books[ownProps.book.id],
	};
};

export default connect(mapStateToProps)(BookFormSecondPage);
