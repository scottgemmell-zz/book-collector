import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../helpers/test.utils";
import Select from "./Select.jsx";

const defaultProps = () => ({
	meta: {
		touched: false,
		error: false,
	},
});

const setup = (overrideProps = {}) => {
	const props = Object.assign({}, defaultProps(), overrideProps);
	const wrapper = shallow(<Select {...props} />);
	return { wrapper, props };
};

describe("<Select />", () => {
	it("snapshot", () => {	
		const { wrapper } = setup();
		expect(wrapper).toMatchSnapshot();
	});

	it("renders", () => {
		const { wrapper } = setup();
		const component = findByTestAttr(wrapper, "select");
		expect(component.length).toBe(1);
	});

	it("is NOT invalid when touched && error `false`", () => {	
		const { wrapper } = setup();
		expect(wrapper.find("is-invalid").length).toBe(0);
	});

	it("is invalid when touched && error `true`", () => {	
		const { wrapper } = setup({
			meta: {
				touched: true,
				error: true,
			},
		});
		expect(wrapper.find(".is-invalid").length).toBe(1);
	});

});
