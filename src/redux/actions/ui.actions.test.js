import { setLoader } from "./ui.actions";

describe("UI actions", () => {

	it("setLoader", () => {
		const action = setLoader({ state: true, feature: "[Books]" });
		expect(action).toEqual({
			type: "SET_LOADER",
			payload: true,
			meta: { feature: "[Books]" }
		});
	});

});