import React from "react";
import App from "./App";
import { shallow } from "enzyme";

const defaultProps = () => ({});
const setup = (overrideProps = {}) => {
	const props = Object.assign({}, defaultProps(), overrideProps);
	const wrapper = shallow(<App {...props} />);
	return { wrapper, props };
};

describe("<App />", () => {
	it("renders", () => {
		const { wrapper } = setup();
		expect(wrapper).toMatchSnapshot();
	});
});