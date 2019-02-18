import React from "react";
import { Provider } from "react-redux";
import { findByTestAttr, storeFactory } from "../helpers/test.utils";
import { BookFormFirstPage } from "./BookFormFirstPage";
import { mount } from "enzyme";

const defaultProps = () => ({});
const setup = (overrideProps = {}) => {
	const props = Object.assign({}, defaultProps(), overrideProps);
	const store = storeFactory(props);
	const wrapper = mount(<Provider store={store}><BookFormFirstPage {...props} /></Provider>);
	return { wrapper, props };
};

describe("<BookFormFirstPage />", () => {

	it("renders", () => {
		const { wrapper } = setup();
		//console.log(wrapper.find("[data-test=\"book-form-first-page\"]").debug());
		const component = findByTestAttr(wrapper, "book-form-first-page");
		expect(component.length).toBe(1);
	});

	it("Contains a `form` tag", () => {
		const { wrapper } = setup();
		expect(wrapper.exists("form")).toEqual(true);
	});

	it("Contains Reset `button` and Next `button`", () => {
		const { wrapper } = setup();
		expect(wrapper.exists("[data-test=\"reset\"]")).toEqual(true);
		expect(wrapper.exists("[data-test=\"submit\"]")).toEqual(true);
	});
});