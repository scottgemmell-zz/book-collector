import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../helpers/test.utils";
import Renderer from "./Renderer.jsx";

const defaultProps = () => ({
});

const setup = (overrideProps = {}) => {
	const props = Object.assign({}, defaultProps(), overrideProps);
	const wrapper = shallow(<Renderer {...props} />);
	return { wrapper, props };
};

describe("<Renderer />", () => {

	const { wrapper } = setup();

	it("snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});

	// it("renders", () => {
	// 	const component = findByTestAttr(wrapper, "renderer");
	// 	expect(component.length).toBe(1);
	// });
});
