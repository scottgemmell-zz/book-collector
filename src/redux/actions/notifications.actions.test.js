import { setNotification, removeNotification } from "./notifications.actions";

describe("Notifications actions", () => {

	it("setNotification", () => {
		const action = setNotification({ message: "404", feature: "[Books]" });
		expect(action).toEqual({
			type: "[Books] SET_NOTIFICATION",
			payload: "404",
			meta: { feature: "[Books]" }
		});
	});

	it("removeNotification", () => {
		const action = removeNotification({ notificationId: 8, feature: "[Books]" });
		expect(action).toEqual({
			type: "[Books] REMOVE_NOTIFICATION",
			payload: 8,
			meta: { feature: "[Books]" }
		});
	});

});