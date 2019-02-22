import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../helpers/test.utils";
import { BookForm } from "./BookForm";
import { fetchBooks } from "../redux/actions/books.actions";

const defaultProps = () => ({
	page: 2,
	// match: { params: { id: 3 } },
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

	const mockNextPage = jest.fn();
	//const mockPrevPage = jest.fn();

	describe("Add", () => {
		let wrapper; 
		beforeEach(() => {
			wrapper = setup({ page: 2, onSubmit: mockNextPage() }).wrapper;
		});
		it("Add", () => {
			//console.log(wrapper.debug());
			expect(wrapper.find("Connect(ReduxForm)").props()).toHaveProperty("title", "Add");
			expect(mockNextPage).toHaveBeenCalled();
			//console.log(wrapper.debug());
		});
	});
	describe("Edit", () => {
		let wrapper;
		beforeEach(() => {
			wrapper = setup({ page: 2, match: { params: { id: 3 } } }).wrapper;
		});
		it("Add", () => {
			//console.log(wrapper.debug());
			expect(wrapper.find("Connect(ReduxForm)").props()).toHaveProperty("title", "Edit");
		});
	});

	it("snapshot", () => {
		const { wrapper } = setup();
		console.log(wrapper.debug());
		expect(wrapper.find("Connect(ReduxForm)")).toMatchSnapshot();
	});

	it("renders", () => {
		const { wrapper } = setup();
		//console.log(wrapper.state());
		const component = findByTestAttr(wrapper, "book-form");
		expect(component.length).toBe(1);
	});
});
