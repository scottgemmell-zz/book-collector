import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../helpers/test.utils";
import { BookForm } from "./BookForm";

const defaultProps = () => ({
	page: 1,
	match: { params: { id: 3 } },
	books: [{ id: 3, title: "Fantastic Mr. Fox", author: "Roald Dahl" }]
});

const setup = (overrideProps = {}) => {
	const props = Object.assign({}, defaultProps(), overrideProps);
	//const store = storeFactory(props);
	const wrapper = shallow(<BookForm {...props} />);
	return { wrapper, props };
};

describe("<BookForm />", () => {
	it("renders", () => {
		const { wrapper } = setup();
		// console.log({wrapper});
		expect(wrapper).toMatchSnapshot();
	});

	it("renders", () => {
		const { wrapper } = setup();
		const component = findByTestAttr(wrapper, "book-form");
		expect(component.length).toBe(1);
	});
});
