import { required, number, alpha, alphaNumeric, minLength3 } from "./validation.js";

describe("Validation", () => {
	it("required", () => {
		expect(required("Hello")).toBe(undefined);
		expect(required(7)).toBe(undefined);
		expect(required(true)).toBe(undefined);
		expect(required("Hello7$")).toBe(undefined);
		expect(required("")).toBe("Required");
		expect(required(false)).toBe("Required");
		expect(required(null)).toBe("Required");
	});

	it("number", () => {
		expect(number(7)).toBe(undefined);
		expect(number("Hello")).toBe("Must be a number");
	});
	it("alpha", () => {
		expect(alpha("Hello")).toBe(undefined);
		expect(alpha(77)).toBe("Only alpha characters");
	});
	it("alphaNumeric", () => {
		expect(alphaNumeric("Hello7")).toBe(undefined);
		expect(alphaNumeric(77)).toBe(undefined);
		expect(alphaNumeric("Hello$7")).toBe("Only alphanumeric characters");
	});

	it("minLength3", () => {
		expect(minLength3("A")).toBe("Must be 3 characters or more");
		expect(minLength3("Ab")).toBe("Must be 3 characters or more");
		expect(minLength3("Abc")).toBe(undefined);
		expect(minLength3("Abcd")).toBe(undefined);
		expect(minLength3("£$")).toBe("Must be 3 characters or more");
		expect(minLength3("£$%&")).toBe(undefined);
	});
});
