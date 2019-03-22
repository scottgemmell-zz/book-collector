import moment from "moment";

export const required = value => 
	(value || typeof value === "number" 
		? undefined 
		: "Required"
	);

export const number = value => 
	value && isNaN(Number(value)) 
		? "Must be a number" 
		: undefined;

export const alpha = value =>
	value && /[^a-zA-Z ]/i.test(value)
		? "Only alpha characters"
		: undefined;

export const alphaNumeric = value =>
	value && /[^a-zA-Z0-9 ]/i.test(value)
		? "Only alphanumeric characters"
		: undefined;

export const minLength = min => value =>
	value && value.length < min ? `Must be ${min} characters or more` : undefined;
	
export const minLength2 = minLength(2);
export const minLength3 = minLength(3);
export const minLength4 = minLength(4);

export const exactLength = exact => value =>
	value && value.length !== exact ? `Must be ${exact} characters` : undefined;

export const exactLength2 = exactLength(2);
export const exactLength3 = exactLength(3);
export const exactLength4 = exactLength(4);

export const validatorDate = values => {
	// console.log('validatorDate', values)
	const errors = {};
	const { dd, mm, yyyy } = values;
	const date = moment(`${dd}-${mm}-${yyyy}`, "DD-MM-YYYY");
	if (
		!date.isValid() 
		|| (values.dd && values.dd.length !== 2)
		|| (values.mm && values.mm.length !== 2)
		|| (values.yyyy && values.yyyy.length !== 4)
	) {
		errors.dd = "Please enter a valid date in the format DD-MM-YYYY";
	}
	return errors;
};

export const validatorYesNo = values => {
	const errors = {};
	const { yesno } = values;
	if (!yesno) {
		errors.yesno = "Do you wish to provide ISBN numbers?";
	}
	return errors;
};