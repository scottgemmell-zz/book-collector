import { apiRequest, apiSuccess, apiError } from "./api.actions";

describe("API actions", () => {

	const url = "http://www.google.co.uk";
	const data = [{
		"anything": "anything"
	}];

	it("apiRequest", () => {
		const action = apiRequest({ 
			body: null, 
			method: "GET", 
			url, 
			feature: "[Books]",
		});
		expect(action).toEqual({
			type: "[Books] API_REQUEST",
			payload: null,
			meta: { method: "GET", url, feature: "[Books]" }
		});
	});

	it("apiSuccess", () => {
		const action = apiSuccess(data, "[Books]");
		expect(action).toEqual({
			type: "[Books] API_SUCCESS",
			payload: data,
			meta: { feature: "[Books]" }
		});
	});

	it("apiError", () => {
		const action = apiError(data, "[Books]");
		expect(action).toEqual({
			type: "[Books] API_ERROR",
			payload: data,
			meta: { feature: "[Books]" }
		});
	});
});