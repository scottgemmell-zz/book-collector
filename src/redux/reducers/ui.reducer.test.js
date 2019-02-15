import { uiReducer } from "./ui.reducer";

describe("uiReducer", () => {
	it("returns default initialState of `undefined` for loading", () => {
		const newState = uiReducer(undefined, { type: "SET_LOADER" });
		expect(newState).toEqual({ loading: undefined });
	});

	it("loading payload is `false`", () => {
		const newState = uiReducer(undefined, { type: "SET_LOADER", payload: false });
		expect(newState).toEqual({ loading: false });
	});

	it("loading payload is `true`", () => {
		const newState = uiReducer(undefined, { type: "SET_LOADER", payload: true });
		expect(newState).toEqual({ loading: true });
	});

	it("", () => {
		const newState = uiReducer(undefined, { type: "MADE_UP", payload: true });
		expect(newState).toEqual({ loading: false });
	});
});