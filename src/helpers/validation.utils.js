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
	const errors = {};
	if (!values.dd) {
		errors.dd = "Required";
	}
	if (values.dd && isNaN(Number(values.dd)) ) {
		errors.dd = "Must be a number";
	}
	if (values.dd && values.dd.length !== 2) {
		errors.dd = "Must be 2 characters";
	}
	if (!values.mm) {
		errors.mm = "Required";
	}
	if (values.mm && isNaN(Number(values.mm)) ) {
		errors.mm = "Must be a number";
	}
	if (values.mm && values.mm.length !== 2) {
		errors.mm = "Must be 2 characters";
	}
	if (!values.yyyy) {
		errors.yyyy = "Required";
	}
	if (values.yyyy && isNaN(Number(values.yyyy)) ) {
		errors.yyyy = "Must be a number";
	}
	if (values.yyyy && values.yyyy.length !== 4) {
		errors.yyyy = "Must be 4 characters";
	}
	return errors;
};