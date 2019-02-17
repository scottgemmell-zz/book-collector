import React from "react";
import { shallow } from "enzyme";
import { BookList } from "./BookList.jsx";

const initialState = {
	// history: null,
	loading: false,
	notification: null,
	books: [
		{ id: 0, title: "Fantastic Mr. Fox", author: "Roald Dahl" },
		{ id: 1, title: "The BFG", author: "Roald Dahl" }
	],
};

describe("<BookList />", () => {

	it("", () => {
		
	});
	
	// it("renders", () => {
	// 	const wrapper = shallow(
	// 		<BookList {...initialState} />
	// 	).dive();
	// 	console.log(wrapper.debug());
	// 	expect(wrapper.find("[data-test]").length).toBe(1);
	// });

	// it("snapshot", () => {
	// 	const wrapper = shallow(
	// 		<BookList {...initialState} />
	// 	);
	// 	expect(wrapper).toMatchSnapshot();
	// });
});
