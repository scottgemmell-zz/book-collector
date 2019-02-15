import { notificationReducer } from "./notification.reducer";

describe("notificationReducer", () => {

	const notification = [{ id: 101, message: "Failed to fetch" }];

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

	it("", () => {
		const newState = notificationReducer(notification, { type: "[Books] REMOVE_NOTIFICATION", payload: 100, meta: "[Books]" });
		expect(newState).toEqual(notification);
	});

	it("", () => {
		const newState = notificationReducer(notification, { type: "[Books] REMOVE_NOTIFICATION", payload: 101, meta: "[Books]" });
		expect(newState).toEqual([]);
	});

	it("Use default when non-matching type", () => {
		const newState = notificationReducer(undefined, { type: "" });
		expect(newState).toEqual([]);
	});
});