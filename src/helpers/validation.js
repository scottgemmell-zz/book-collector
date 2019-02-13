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
	value && value.length < min ? `Must be ${min} characters or more` : undefined

export const minLength3 = minLength(3);