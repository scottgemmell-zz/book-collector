import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../helpers/test.utils";
import { BookForm } from "./BookForm";
import { fetchBooks } from "../redux/actions/books.actions";

const defaultProps = () => ({
	// page: 1,
	match: { params: { id: 3 } },
	books: [{ id: 3, title: "Fantastic Mr. Fox", author: "Roald Dahl" }]
});

const setup = (overrideProps = {}) => {
	const props = Object.assign({}, defaultProps(), overrideProps);
	const store = storeFactory(props);
	//console.log(store.getState());
	const wrapper = shallow(<BookForm {...store} {...props} />);
	return { wrapper, props };
};

describe("<BookForm />", () => {
	
	it("snapshot", () => {
		const { wrapper } = setup();
		// console.log({wrapper});
		expect(wrapper).toMatchSnapshot();
	});

	it("renders", () => {
		const { wrapper } = setup();
		console.log(wrapper.state());
		const component = findByTestAttr(wrapper, "book-form");
		expect(component.length).toBe(1);
	});
});
