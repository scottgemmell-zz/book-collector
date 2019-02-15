import { notificationReducer } from "./notification.reducer";

describe("notificationReducer", () => {
	it("returns default initialState of `undefined`", () => {
		const newState = notificationReducer(undefined, { type: "SET_NOTIFICATION", payload: undefined, meta: "[Books]" });
		expect(newState).toEqual([undefined]);
	});

	it("returns false when payload `false`", () => {
		const newState = notificationReducer(undefined, { type: "[Books] SET_NOTIFICATION", payload: false, meta: "[Books]" });
		expect(newState).toEqual([false]);
	});

	it("returns true when payload `true`", () => {
		const newState = notificationReducer(undefined, { type: "[Books] SET_NOTIFICATION", payload: true, meta: "[Books]" });
		expect(newState).toEqual([true]);
	});
});