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

	it("Use default when non-matching type ", () => {
		const newState = uiReducer(undefined, { type: "", payload: true });
		expect(newState).toEqual({ loading: false });
	});
});