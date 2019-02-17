import React from "react";
import { shallow } from "enzyme";
import { Page404 } from "./";

describe("<Page404 />", () => {
	it("snapshot", () => {
		const wrapper = shallow(
			<Page404 />
		);
		expect(wrapper).toMatchSnapshot();
	});
	it("renders", () => {
		const wrapper = shallow(
			<Page404 />
		);
		expect(wrapper.find("[data-test]").length).toBe(1);
	});
});
