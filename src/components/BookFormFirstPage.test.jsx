import React from "react";
import BookFormFirstPage from "./BookFormFirstPage";
import { shallow } from "enzyme";

const defaultProps = () => ({});
const setup = (overrideProps = {}) => {
	const props = Object.assign({}, defaultProps(), overrideProps);
	const wrapper = shallow(<BookFormFirstPage {...props} />);
	return { wrapper, props };
};

describe("<BookFormFirstPage />", () => {
	it("renders", () => {
		const { wrapper } = setup(); 
		// console.log({wrapper});
		expect(wrapper).toMatchSnapshot();
	});
});